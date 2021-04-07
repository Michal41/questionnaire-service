class User < ApplicationRecord
  has_many :questionnaires
  has_many :competed_questionnaires
  devise :database_authenticatable, :registerable,
         :recoverable, :confirmable, :rememberable, :validatable
end
