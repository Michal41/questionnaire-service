class Api::V1::QuestionnairesController < ApplicationController
  def index
    questionnaires = Questionnaire.all()
    render json:questionnaires
  end

  def create
    questionnaire=Questionnaire.create!(questionnaire_params)
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
    return @questionnaire if @questionnaire.id == current_user.id
  end

end
