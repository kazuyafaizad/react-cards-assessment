The query looks good but I think the query should have index in order to improve it.
```
CREATE INDEX affiliates_type ON affiliates (type);
CREATE INDEX jobs_publish_status_id ON jobs (publish_status,id);
```
Project completed around 2 hours

