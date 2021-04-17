class Api::V1::CompletedQuestionsController < ApplicationController

  protect_from_forgery except: :create
  def create
    questionnaire = CompletedQuestionnaire.find(params[:completed_questionnaire_id])
    questions_arr = completed_question_params[:questions_list]
    questions_arr.each do |question|
      questionnaire.completed_questions.create(question)
    end
    render json: questionnaire.completed_questions
  end

  def completed_question_params
    params.require(:completed_question).permit(:completed_questionnaire_id, questions_list: %i[question_id answer_id])
  end

end
