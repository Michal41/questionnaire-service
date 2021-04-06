class Questionnaire < ApplicationRecord
  has_one :user
  has_many :questions, dependent: :destroy
  validates :name, presence: true

  enum status: %i[dfaft published archive]
end
