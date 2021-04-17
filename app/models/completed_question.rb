class CompletedQuestion < ApplicationRecord
  belongs_to :completed_questionnaire
  belongs_to :answer
  belongs_to :question
end
