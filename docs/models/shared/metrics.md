# Metrics


## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `changesFromLastPeriod`                                                                         | [MetricsChangesFromLastPeriod](../../models/shared/metricschangesfromlastperiod.md)             | :heavy_minus_sign:                                                                              | The changes in average response time compared to the last period.                               |
| `environmentUuid`                                                                               | *string*                                                                                        | :heavy_minus_sign:                                                                              | The environment_uuid that filters this request.                                                 |
| `region`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | The region that filters this request.                                                           |
| `responseTimes`                                                                                 | [MetricsResponseTimes](../../models/shared/metricsresponsetimes.md)[]                           | :heavy_minus_sign:                                                                              | The list of response times based on the timeframe of the request.                               |
| `thisTimePeriod`                                                                                | [MetricsThisTimePeriod](../../models/shared/metricsthistimeperiod.md)                           | :heavy_minus_sign:                                                                              | The average response time for different percentiles for the request in the requested timeframe. |
| `timeframe`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | The timeframe that filters this request.                                                        |