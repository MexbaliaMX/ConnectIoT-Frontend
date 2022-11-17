import axios from "axios";


//Función: Call Method
//Funcion general de llamada al metodo /Call de la API
const callMethod = (methodName, params, accountId, privateKey) => {
  return axios
    .post(
      process.env.REACT_APP_API_BASE_URL + `call`,
      {
        account_id: accountId,
        params: params,
        method: methodName,
      },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + privateKey,
        },
      }
    )
    .then((res) => {
      return res.data;
    });
};

export const createRegistry = (registryName, accountId, privateKey) => {
  var resp = callMethod(
    "create_registry",
    { registry_name: registryName },
    accountId,
    privateKey
  );
  if (resp.status === 200) return "Registry Created";
  else return "Failed";
};

export const deleteRegistry = (registryName, accountId, privateKey) => {
  var resp = callMethod(
    "delete_registry",
    { registry_name: registryName },
    accountId,
    privateKey
  );
  if (resp.status === 200) return "Registry Deleted";
  else return "Failed";
};

export const addDeviceToRegistry = (registryName, deviceName, description, accountId, privateKey) => {
  var resp = callMethod(
    "add_device_to_registry",
    {
      registry_name: registryName,
      device_name: deviceName,
      description: description,
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return "Device Added";
  else return "Failed";
};

export const deleteDeviceFromRegistry = (registryName, deviceName, accountId, privateKey) => {
  var resp = callMethod(
    "delete_device_from_registry",
    {
      registry_name: registryName,
      device_name: deviceName,
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return "Device Deleted";
  else return "Failed";
};

export const setDeviceData = (registryName, deviceName, data, accountId, privateKey) => {
  var resp = callMethod(
    "set_device_data",
    {
      registry_name: registryName,
      device_name: deviceName,
      data: data
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return "Data Saved";
  else return "Failed";
}

export const getDeviceData = (registryName, deviceName, accountId, privateKey) => {
  var resp = callMethod(
    "get_device_data",
    {
      registry_name: registryName,
      device_name: deviceName,
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return resp.data;
  else return "Failed";
}

export const setDeviceDataParam = (registryName, deviceName, param, value, accountId, privateKey) => {
  var resp = callMethod(
    "set_device_data_param",
    {
      registry_name: registryName,
      device_name: deviceName,
      param: param,
      value: value
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return "Data Saved";
  else return "Failed";
}

export const getDeviceDataParam = (registryName, deviceName, param, accountId, privateKey) => {
  var resp = callMethod(
    "get_device_data_param",
    {
      registry_name: registryName,
      device_name: deviceName,
      param: param
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return resp.data;
  else return "Failed";
}

export const setDeviceMetadata = (registryName, deviceName, metadata, accountId, privateKey) => {
  var resp = callMethod(
    "set_device_metadata",
    {
      registry_name: registryName,
      device_name: deviceName,
      metadata: metadata
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return "Metadata Saved";
  else return "Failed";
}

export const getDeviceMetadata = (registryName, deviceName, accountId, privateKey) => {
  var resp = callMethod(
    "get_device_metadata",
    {
      registry_name: registryName,
      device_name: deviceName,
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return resp.data;
  else return "Failed";
}

export const setDeviceMetadataParam = (registryName, deviceName, param, value, accountId, privateKey) => {
  var resp = callMethod(
    "set_device_metadata_param",
    {
      registry_name: registryName,
      device_name: deviceName,
      param: param,
      value: value
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return "Metadata Saved";
  else return "Failed";
}

export const getDeviceMetadataParam = (registryName, deviceName, param, accountId, privateKey) => {
  var resp = callMethod(
    "get_device_metadata_param",
    {
      registry_name: registryName,
      device_name: deviceName,
      param: param
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return resp.data;
  else return "Failed";
}

