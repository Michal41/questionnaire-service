class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.string :content, default: ''
      t.integer :question_id
      t.timestamps
    end
  end
end
