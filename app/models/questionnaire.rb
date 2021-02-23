class Questionnaire < ApplicationRecord
  has_many :questions, dependent: :destroy
  validates :name, presence:true
end
