class Questionnaire < ApplicationRecord
  has_one :user
  has_many :questions, dependent: :destroy
  has_many :competed_questionnaires, dependent: :destroy

  validates :name, presence: true

  enum status: %i[draft published archive]
end
