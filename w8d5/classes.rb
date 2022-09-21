class Potato
  def initialize name, is_cool, size
    @name = name
    @is_cool = is_cool
    @size = size
  end

  # attr_reader :name
  # attr_writer :name

  attr_accessor :name

  def greet
    puts "I am #{@name}"
    puts "I am pretty cool." if @is_cool
    puts "I am pretty lame." unless @is_cool
  end

  def am_i_big?
    if @size < 10
      puts "I am small"
    elsif @size < 20
      puts "I am medium"
    else
      puts "I am big"
    end
  end

end


russett = Potato.new "Russett", true, 15
red_potato = Potato.new("Red Potato",false,5)

p russett

russett.greet
red_potato.greet

russett.am_i_big?
red_potato.am_i_big?

puts russett.name

russett.name = "Russettanator"
puts russett.name