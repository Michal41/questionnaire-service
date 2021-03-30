class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery except: :create
  
  def index
    result = Questionnaire.find(params[:questionnaire_id]).questions
    render json: result
  end
  
  def create
    question = Question.create(question_params)
    render :json => question
  end

  def update
    if params[:answers].length!=0
      params[:answers].each do |answer|
        Answer.find(answer[:id]).update(content: answer[:content])
      end
    end
    question = Question.find(params[:id])
    if question.update(question_params)
      render :json => question
    else
      render json: question.error, status: :unprocessable_entity 
    end
  end

  private

  def question_params
    params.require(:question).permit(:questionnaire_id, :content, :answers)
  end
end
