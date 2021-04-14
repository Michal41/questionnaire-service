class Api::V1::CompletedQuestionnairesController < ApplicationController

  def create
    completed_questionnaires = current_user.completed_questionnaires.create(completed_questionnaire_params)
    render json: completed_questionnaires
  end

  def completed_questionnaire_params
    params.require(:completed_questionnaire).permit(:questionnaire_id)
  end
end
