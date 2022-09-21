# each

list = ["Potato","Yogurt","Parsley"]
hash = {
  :potato => "yes",
  :yogurt => "sure",
  :parsley => "no"
}

hash = {
  bob: "yes"
}
list.each do |item|
  puts item
end

# each_with

list.each_with_index do |item, index|
  puts "#{item} at position #{index}"
end


some_number = rand(10..20)

some_number.times do
  puts "wiggle wiggle wiggle"
end


# while
# bob = 0
# while bob < 10
#   bob += 1
#   sleep(1)
#   puts "weeeee"
# end

# for

for item in list do 
  puts item
end


for something in hash do
  p something
end


puts hash.methods
