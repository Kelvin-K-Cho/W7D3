# @guests.each do |guest|
#   json.set! guest.id do
#     json.partial! 'guest', guest: guest
#   end
# end

range = @guests.select {|guest| guest.age >= 40 && guest.age <= 50 }


json.array! range, :id, :name, :age, :favorite_color
