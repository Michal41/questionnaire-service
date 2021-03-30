class Api::V1::QuestionnairesController < ApplicationController
  def index
    questionnaires = current_user.questionnaires
    render json:questionnaires
  end

  def create
    questionnaire=current_user.questionnaires.create(questionnaire_params)
    if questionnaire
      questionnaire.questions.create
      render json:questionnaire
    else
      render json:questionnaire.errors
    end
  end

  def show
    if find_questionnaire
      render json:find_questionnaire
    else
      render json:find_questionnaire.errors
    end
  end

  def destroy
    find_questionnaire&.destroy
    render json: {message: "questionnaire deleted"}

  end
  private

  def questionnaire_params
    params.require(:questionnaire).permit(:name, :description)
  end

  def find_questionnaire
    @questionnaire ||= Questionnaire.find(params[:id])
  end

end
