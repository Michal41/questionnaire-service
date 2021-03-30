class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :content, default: ''

      t.timestamps
    end
  end
end
