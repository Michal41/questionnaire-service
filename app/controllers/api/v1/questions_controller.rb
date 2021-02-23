class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery except: :create
  def create
    id = Questionnaire.last().id
    question = Question.create(questionnaire_id: id)
    render :json => question
  end

end
