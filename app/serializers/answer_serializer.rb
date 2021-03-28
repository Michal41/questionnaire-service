class AnswerSerializer < ActiveModel::Serializer
  has_one :question
  attributes :id, :content, :question_id

  def question_id
    object.question.id
  end
end
