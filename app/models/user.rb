class User < ApplicationRecord
  has_many :questionnaires
  devise :database_authenticatable, :registerable,
         :recoverable, :confirmable, :rememberable, :validatable
end
