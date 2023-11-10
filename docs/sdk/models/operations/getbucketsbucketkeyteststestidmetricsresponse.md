# GetBucketsBucketKeyTestsTestIdMetricsResponse


## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `metrics`                                                                                 | [shared.Metrics](../../../sdk/models/shared/metrics.md)                                   | :heavy_minus_sign:                                                                        | List of average response times and additional performance metrics belonging to this test. |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [AxiosResponse](https://axios-http.com/docs/res_schema)                                   | :heavy_minus_sign:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |