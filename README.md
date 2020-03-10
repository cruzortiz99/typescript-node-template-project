# Typescript Node Express Template Project

## Install

```shell
>> npm i
// ó
>> yarn
```

## Run dev mode

To run a dev mode you must run the script:

```shell
>> npm run dev
// ó
>> yarn dev
```

If you want to be able to debug your code, you must build the configuration on your IDE.

### VScode:

1. Build a launch file for vscode debugger and add this to the file:

    ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "attach",
                "name": "NodeTS Nodemon",
                "processId": "${command:PickProcess}",
                "restart": true,
                "protocol": "inspector"
            }
            //...
        ]
    }
    ```

2. Then you need to lunch your application with the script

    ```shell
    >> npm run dev
    // ó
    >> yarn dev
    ```

3. Press the button to run de debug on your vscode. A list of option will be display.

4. Select the option with: `node --inspect=5858 -r ts-node/register ./src/app.ts` on it
5. And done now you can use you vscode to debug your app using break points.

## Run build

```shell
>> npm run build
// ó
>> yarn build
```
