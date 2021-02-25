class AddQuestionnaireIdToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :questionnaire_id, :integer
  end
end
