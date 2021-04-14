class CreateCompletedQuestionnaires < ActiveRecord::Migration[6.0]
  def change
    create_table :completed_questionnaires do |t|
      t.string :user_id
      t.string :questionnaire_id

      t.string :integer

      t.timestamps
    end
  end
end
