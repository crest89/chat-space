FactoryBot.define do
  factory :user do
    password = Faker::Internet.password(min_length: 8)
    name {Faker::Name.Last_name}
    email {Faker::Internet.free_email}
    password {"00000000"}
    password_confirmation {"0000000"}
  end
end