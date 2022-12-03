# table of contnets

- API
  -

### Auth token

POST method
http://localhost/suicura/backend/api/user/auth
body

```json
{
  "user_name": "albert2",
  "user_password": "password2"
}
```

Return/Result

```json
{
  "status": {
    "remarks": "success",
    "message": "Succesfully logged in."
  },
  "payload": {
    "user_id": 2,
    "user_name": "albert2",
    "token": "61e762befa3077218ae49790e774e06477ac797db24d1ab0c7f30e9cfb7af44f17b62806f45adbe44c6e3fdfb27e22d0c25c"
  },
  "timestamp": {
    "date": "2022-12-03 13:03:23.704613",
    "timezone_type": 3,
    "timezone": "Asia/Manila"
  },
  "prepared_by": "Albert John B. Santos"
}
```

### get user todolist

http://localhost/suicura/backend/api/user/todolist
body

```json
{
  "user_id": 2,
  "user_token": "61e762befa3077218ae49790e774e06477ac797db24d1ab0c7f30e9cfb7af44f17b62806f45adbe44c6e3fdfb27e22d0c25c"
}
```

Return/Result

```json
{
  "status": {
    "remarks": "success",
    "message": "Sucessfully fetch todolist."
  },
  "payload": [
    {
      "todo_id": 10,
      "todo_name": "todo sample",
      "todo_description": "todo desription",
      "todo_created": "2022-12-03 12:37:40",
      "todo_status": 0
    },
    {
      "todo_id": 11,
      "todo_name": "todo sample",
      "todo_description": "todo desription",
      "todo_created": "2022-12-03 12:37:40",
      "todo_status": 0
    }
  ],
  "timestamp": {
    "date": "2022-12-03 14:19:12.644270",
    "timezone_type": 3,
    "timezone": "Asia/Manila"
  },
  "prepared_by": "Albert John B. Santos"
}
```

### gets list of teams of user

http://localhost/suicura/backend/api/user/team

```json
{
  "user_id": "2",
  "user_token": "61e762befa3077218ae49790e774e06477ac797db24d1ab0c7f30e9cfb7af44f17b62806f45adbe44c6e3fdfb27e22d0c25c"
}
```

Return/Result

```json
{
  "status": {
    "remarks": "success",
    "message": "Sucessfully fetch team."
  },
  "payload": [
    {
      "team_id": 7,
      "team_name": "team sample 2",
      "team_description": "team description sample 2",
      "team_created": "2022-12-03"
    },
    {
      "team_id": 8,
      "team_name": "team sample 2",
      "team_description": "team description sample 2",
      "team_created": "2022-12-03"
    },
    {
      "team_id": 9,
      "team_name": "team sample 2",
      "team_description": "team description sample 2",
      "team_created": "2022-12-03"
    },
    {
      "team_id": 10,
      "team_name": "team sample 2",
      "team_description": "team description sample 2",
      "team_created": "2022-12-03"
    },
    {
      "team_id": 11,
      "team_name": "team sample 2",
      "team_description": "team description sample 2",
      "team_created": "2022-12-03"
    }
  ],
  "timestamp": {
    "date": "2022-12-03 14:24:44.115212",
    "timezone_type": 3,
    "timezone": "Asia/Manila"
  },
  "prepared_by": "Albert John B. Santos"
}
```
