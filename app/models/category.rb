class Category < ApplicationRecord
    has_many :options
    belongs_to :user
end
