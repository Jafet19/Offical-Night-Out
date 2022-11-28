class User < ApplicationRecord
    has_many :categories
    has_many :options, through: :categories
    has_many :reviews
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
