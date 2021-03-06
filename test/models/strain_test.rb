require 'test_helper'

class StrainTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  setup do
    @strain = build(:strain)
  end

  test "a strain must have effect" do
    @strain.save
    assert @strain.valid?
    refute_nil @strain.effects
  end

  test "a strain can have many effects" do
    @strain.effects.count>1
    assert @strain.save
  end

end
