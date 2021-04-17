class CreateCompletedQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :completed_questions do |t|
      t.integer :completed_questionnaire_id
      t.integer :answer_id
      t.integer :question_id

      t.timestamps
    end
  end
end
