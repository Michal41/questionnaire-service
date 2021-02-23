class Questionnaire < ApplicationRecord
  has_many :questions
  validates :name, presence:true
end
