## Idea:
Have spotify autogenerate a profile photo based on the songs added (like it currently does), but this time it keeps scaling the photos so that it's always a n x n (square) cover photo

## NEED: 
1) Create a photo editor that takes in an array of 2n photos and outputs a n by n cover photo. 
2) Ability to connect to spotify 



## Development: 

### Latest status of the code: 

We have been able generate a photo that is a merge of two photos: 
![image](test-images/testMerge2&3.jpeg)

Add now with the latest commit, we ensure images are the same size before merging: 
![image](test-images/testMerge2&3-make-images-same-size.jpeg)

Realized, I don't want to crop things but actually resize them (otherwise some images are weirdly zoomed in). For the first two photos, I couldn't tell this since they are reasonable sizes. But by changing to resizing we can see the code becomes much less complex and the result is the same as the previous photo (but would be different if we had a really large photo)
![image](test-images/testMerge2&3-make-images-same-size-VIA-resize.jpeg)

### Next step: 
Try a bunch more photos! 