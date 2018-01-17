class CreateDispensaries < ActiveRecord::Migration[5.1]
  def change
    create_table :dispensaries do |t|
      t.string :address
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
