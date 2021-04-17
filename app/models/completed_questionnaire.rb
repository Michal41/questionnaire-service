class CompletedQuestionnaire < ApplicationRecord
  belongs_to :questionnaire
  belongs_to :user
  has_many :completed_questions
end
