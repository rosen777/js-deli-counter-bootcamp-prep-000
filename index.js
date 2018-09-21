<<<<<<< HEAD
var katzDeli = [ ]
=======
var katzDeliLine = [ ]
>>>>>>> dd7895f716b5c937ba75a6aa4b0556f8fc1c9b75

function takeANumber(deliLine, name) {
  deliLine.push(name)
  var welcome = "Welcome, " + name + ". You are number " + 
  deliLine.length + " in line."
  
  return welcome
<<<<<<< HEAD
}

function nowServing(deliLine) {
  
  if(deliLine.length > 0) {
  
   return "Currently serving " +  deliLine.shift() + "."

  } else {
    
        return "There is nobody waiting to be served!"
        
  }
}

function currentLine(deliLine) {
  
  var lineMessage
  
  if(deliLine.length > 0) {
    for(var i = 0; i < deliLine.length; i++) {
       deliLine[i] = [i + 1] + ". " + deliLine[i]
       lineMessage = "The line is currently: " + deliLine.join(', ')
    } 
  }else{
    return "The line is currently empty."
  }
  return lineMessage
}

=======
}
>>>>>>> dd7895f716b5c937ba75a6aa4b0556f8fc1c9b75
