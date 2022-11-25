class User < ApplicationRecord
    has_many :categories
    has_many :options, through: :categories
    has_many :reviews
    has_secure_password
end
