class Api::V1::AnswersController < ApplicationController
  protect_from_forgery except: :create
  def create
    answer = Answer.create(question_id: params[:question_id], content: 'from controller' )
    render :json => answer
  end

  def update
    question = Question.find(params[:id])
    if question.update(question_params)
      render :json => question
    else
      render json: question.error, status: :unprocessable_entity 
    end
  end

  private

  def question_params
    params.require(:question).permit(:questionnaire_id, :content)
  end
end
