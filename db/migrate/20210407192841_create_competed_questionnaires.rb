class CreateCompetedQuestionnaires < ActiveRecord::Migration[6.0]
  def change
    create_table :competed_questionnaires do |t|
      t.integer :user_id
      t.integer :questionnaire_id
      t.timestamps
    end
  end
end
