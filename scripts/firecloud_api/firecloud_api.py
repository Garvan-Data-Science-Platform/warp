"""
firecloud_api.py
Author: Kevin Palis <palis@broadinstitute.org>

This module provides an object-oriented interface for interacting with the Firecloud REST API.
It includes functionalities to submit workflows, retrieve workflow outputs, and monitor
workflow statuses.

Classes:
    - FirecloudAPI: A class to handle Firecloud API interactions.

Usage:
    Initialize the FirecloudAPI class with API token, namespace, and workspace details, and
    call its methods to interact with the Firecloud service.
"""

import requests
import time
import json

class FirecloudAPI:
    def __init__(self, token, namespace, workspace_name):
        """
        Initializes the FirecloudAPI object with authentication and workspace details.

        :param token: API access token
        :param namespace: Workspace namespace
        :param workspace_name: Workspace name
        """
        self.token = token
        self.namespace = namespace
        self.workspace_name = workspace_name
        self.base_url = "https://api.firecloud.org/api"
        self.headers = {
            'accept': '*/*',
            'Authorization': f'Bearer {self.token}',
        }

    def get_workflow_outputs(self, submission_id, workflow_id, pipeline_name):
        """
        Fetches workflow outputs from the Firecloud API.

        :param submission_id: The ID of the submission
        :param workflow_id: The ID of the workflow
        :param pipeline_name: The name of the pipeline whose outputs are required
        :return: Outputs dictionary and a list of output values
        """
        # Construct the API endpoint URL for fetching workflow outputs
        url = f"{self.base_url}/workspaces/{self.namespace}/{self.workspace_name}/submissions/{submission_id}/workflows/{workflow_id}/outputs"
        response = requests.get(url, headers=self.headers)

        # Check if the API request was successful
        if response.status_code == 200:
            json_response = response.json()
            # Extract outputs for the specified pipeline name
            outputs = json_response.get('tasks', {}).get(pipeline_name, {}).get('outputs', {})
            output_values = list(outputs.values())
            return outputs, output_values
        else:
            print(f"Failed to retrieve workflow outputs. Status code: {response.status_code}")
            return None, None

    def create_submission(self, submission_data):
        """
        Submits a workflow to the Firecloud API.

        :param submission_data: JSON data containing submission details
        :return: Submission ID if successful, None otherwise
        """
        # Construct the API endpoint URL for creating a new submission
        url = f"{self.base_url}/workspaces/{self.namespace}/{self.workspace_name}/submissions"
        response = requests.post(url, headers=self.headers, json=submission_data)

        # Check if the submission was created successfully
        if response.status_code == 201:
            submission_id = response.json().get('submissionId')
            print(f"Submission created with ID: {submission_id}")
            return submission_id
        else:
            print(f"Failed to create submission. Status code: {response.status_code}")
            return None

    def poll_submission_status(self, submission_id):
      """
      Polls the status of a submission until it is complete and returns all workflow IDs.

      :param submission_id: The ID of the submission to poll
      :return: List of workflow IDs if successful, None otherwise
      """
      # Construct the API endpoint URL for polling submission status
      status_url = f"{self.base_url}/workspaces/{self.namespace}/{self.workspace_name}/submissions/{submission_id}"
      previous_workflow_status = []
      workflow_ids = []

      # Continuously poll the status of the submission until completion
      while True:
          print("Polling submission status...")  # Added for debugging

          status_response = requests.get(status_url, headers=self.headers)
          
          #print status_response code
          print(status_response.status_code)


          # Check if the response status code is successful (200)
          if status_response.status_code != 200:
              print(f"Error: Received status code {status_response.status_code}")
              print(f"Response content: {status_response.text}")
              break

          try:
              # Parse the response as JSON
              status_data = status_response.json()
          except json.JSONDecodeError as e:
              print("Error decoding JSON response:", e)
              print(f"Response content: {status_response.text}")
              break

          # Retrieve the overall submission status
          submission_status = status_data.get("status", "")
          workflows = status_data.get("workflows", [])

          # Iterate over all workflows and extract relevant information
          for workflow in workflows:
              workflow_id = workflow.get("workflowId")
              workflow_status = workflow.get("status")
              input_resolutions = workflow.get("inputResolutions", [])
              
              # Print the workflow ID, status, and input details
              print(f"Workflow ID: {workflow_id}, Status: {workflow_status}")
              for input_res in input_resolutions:
                  input_name = input_res.get("inputName")
                  input_value = input_res.get("value", "N/A")
                  print(f"  Input: {input_name}, Value: {input_value}")

              # Store the workflow ID
              if workflow_id:
                  workflow_ids.append(workflow_id)

          # Print the workflow statuses
          workflows_status = [workflow.get("status") for workflow in workflows]
          if workflows_status != previous_workflow_status:
              print(f"Workflows Status: {workflows_status}")
              previous_workflow_status = workflows_status

          # Check if the submission is complete and if any workflow has failed
          if submission_status == "Done" and "Failed" in workflows_status:
              print("At least one workflow has failed.")
              break
          elif submission_status == "Done":
              break

          # Wait for 60 seconds before polling again
          time.sleep(60)

      return workflow_ids if workflow_ids else None


# Bash Script Interaction
if __name__ == "__main__":
    import argparse

    # Set up command-line argument parsing
    parser = argparse.ArgumentParser(description='Interact with Firecloud API.')
    parser.add_argument('--token', required=True, help='API access token')
    parser.add_argument('--namespace', required=True, help='Workspace namespace')
    parser.add_argument('--workspace', required=True, help='Workspace name')
    parser.add_argument('--action', required=True, choices=['get_outputs', 'submit', 'poll_status'], help='Action to perform')
    parser.add_argument('--submission_id', help='Submission ID (required for get_outputs and poll_status)')
    parser.add_argument('--workflow_id', help='Workflow ID (required for get_outputs)')
    parser.add_argument('--pipeline_name', help='Pipeline name (required for get_outputs)')
    parser.add_argument('--submission_data_file', help='Path to submission data JSON file (required for submit)')

    args = parser.parse_args()

    # Initialize the FirecloudAPI instance with provided arguments
    firecloud_api = FirecloudAPI(args.token, args.namespace, args.workspace)

    # Perform actions based on the specified action argument
    if args.action == 'get_outputs':
        if not all([args.submission_id, args.workflow_id, args.pipeline_name]):
            print("For 'get_outputs', --submission_id, --workflow_id, and --pipeline_name are required.")
        else:
            outputs, output_values = firecloud_api.get_workflow_outputs(args.submission_id, args.workflow_id, args.pipeline_name)
            print(outputs, output_values)

    elif args.action == 'submit':
        if not args.submission_data_file:
            print("For 'submit', --submission_data_file is required.")
        else:
            # Load submission data from the specified JSON file
            with open(args.submission_data_file, 'r') as file:
                submission_data = json.load(file)
            submission_id = firecloud_api.create_submission(submission_data)
            print(submission_id)

    elif args.action == 'poll_status':
        if not args.submission_id:
            print("For 'poll_status', --submission_id is required.")
        else:
            workflow_ids = firecloud_api.poll_submission_status(args.submission_id)
            print(f"Workflow IDs: {workflow_ids}")