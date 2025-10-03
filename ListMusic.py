import boto3
import json

BUCKET_NAME = 'python-bucket-1'
FOLDER_PATH = 'Music/'

def lambda_handler(event, context):

        s3_client = boto3.client('s3')

        response = s3_client.list_objects_v2(
            Bucket=BUCKET_NAME,
            Prefix=FOLDER_PATH
        )

        fileList = []

        if 'Contents' in response:
            print(f"Files in folder '{FOLDER_PATH}' inside bucket '{BUCKET_NAME}':")
            for obj in response['Contents']:
                f = obj['Key'].split('/')[-1]
                if f:
                    fileList.append('https://python-bucket-1.s3.eu-west-2.amazonaws.com/Music/' + f)
                    print(f)

        else:
            print(f"No files found in folder '{FOLDER_PATH}'.")
   
        return {"data":tuple(fileList)}   