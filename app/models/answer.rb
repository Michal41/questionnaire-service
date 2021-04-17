class Answer < ApplicationRecord
  belongs_to :question
  has_many :completed_questions
end
