# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... 
### usersテーブル
|Column|type|Option|
|------|----|------|
|name|string|null: false,  add_index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
|password cheack|null:false|

### Association
- has_many :groups_users
- has_many :messages
- has_many :groups, through: groups_users

### messageテーブル

|Column|type|Option|
|------|----|------|
|body|text|
|image|string|
|group_id|integer|
|user_id|integer|

### Association
- belong_to group
- belong_to user

### groupテーブル
|Column|type|Option|
|------|----|------|
|group_name|integer|null: false, unique: true|

### Association
- has_many group_users
- has_many messages
- has_many users, through: groups_users

### groups_usersテーブル

|Column|type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user
