# book-management

RESTful API using Node.js for managing books.

User Node Version 14 and above
npm version 7 or above

# How to start app

step 1. clone repo from https://github.com/shyam2529/book-management.git
step 2. npm install
step 3. npm start

App will be started on port 3000 and can be access apis via postman or similar application


# CRUD operations: 

# 1. Add a new book (title, author, summary)

endpoint: http://localhost:3000/api/save
type: POST
Headers: <Content-Type: application/json>
input data: 
{
	"title": "Problem Solving Through Node JS", 
	"author": "Yogesh Panchal",
	"summary": "Think Straight: Change your thoughts, Change your life Foroux, Darius"
}

result:

1. Book added if no book exists in db with the provided title
2. Book already exists with this title. if book is exists

# 2. View a list of all books

endpoint: http://localhost:3000/api/findall
type: POST
Headers: <Content-Type: application/json>

result:
[
  {
    "__v" : 0,
    "_id" : "654bce84c27c5c8401d3526c",
    "author" : "Yogi Panchal",
    "title" : "Autobiography of a Yogi (Complete Original Edition)",
    "summary" : "Autobiography of a Yogi is one of the famous Spiritual Book of the Twentieth Century which is written by Paramahansa Yogananda. In this book he explained memorable findings of the world of saints and yogis and also explained science and miracles, death and resurgence. With soul-satisfying consciousness and endearing wit, he lightens the hidden secrets of life and the world opening our hearts and minds to the happiness, splendour and limitless spiritual capacities that last in the lives of every human being. This edition has been offered specially from Yogoda Satsanga Society of India, the association established by the writer. The book containing extensive content about all of his desires. Moreover, the book has several high definition pictures. It is a spiritual treasury that will make you understand the meaning of life. Hence this book is real treasure for people who are on a spiritual quest. You can easily get this book on Amazon India. About the Author Paramahansa Yoganandaborn is not only famous among the Indians but also popular among the westerners as a great Yogi. He teaches millions of people mediation and Kriya Yoga through his master piece Autobiography of a Yogi."
  },
  {
    "__v" : 0,
    "_id" : "654bcfa1505adc19a404aa63",
    "author" : "Yogi Panchal",
    "title" : "Tales from Indian Mythology Collection of 10 Books Story Books For Kids",
    "summary" : "Indian Mythology is vast and absorbing with endless mesmerizing tales and legends. Tales from Indian Mythology is a captivating series of 10 books that aims to fascinate and educate young readers about our deep-rooted culture. Retold in a simple language with fantastic illustrations this series includes stories of Shiva, Durga, Krishna, Hanuman and much more. These tales are meant to guide young and old alike in and about Indian traditions and culture."
  },
]
1. Books array will be return if book exists in
2. No records if no book there

# 3. View details of a specific book by its ID


endpoint: http://localhost:3000/api/find
type: GET
Headers: <Content-Type: application/json>
input data:
{
	"id": "654bcfa1505adc19a404aa63"
}
result:
  {
    "__v" : 0,
    "_id" : "654bce84c27c5c8401d3526c",
    "author" : "Yogi Panchal",
    "title" : "Autobiography of a Yogi (Complete Original Edition)",
    "summary" : "Autobiography of a Yogi is one of the famous Spiritual Book of the Twentieth Century which is written by Paramahansa Yogananda. In this book he explained memorable findings of the world of saints and yogis and also explained science and miracles, death and resurgence. With soul-satisfying consciousness and endearing wit, he lightens the hidden secrets of life and the world opening our hearts and minds to the happiness, splendour and limitless spiritual capacities that last in the lives of every human being. This edition has been offered specially from Yogoda Satsanga Society of India, the association established by the writer. The book containing extensive content about all of his desires. Moreover, the book has several high definition pictures. It is a spiritual treasury that will make you understand the meaning of life. Hence this book is real treasure for people who are on a spiritual quest. You can easily get this book on Amazon India. About the Author Paramahansa Yoganandaborn is not only famous among the Indians but also popular among the westerners as a great Yogi. He teaches millions of people mediation and Kriya Yoga through his master piece Autobiography of a Yogi."
  }
1. Books details will be return if book exists in db
2. No records if no book there


# 4. Update a book's details


endpoint: http://localhost:3000/api/update
type: POST
Headers: <Content-Type: application/json>
input data: 
{
	"id": "654bcfa1505adc19a404aa63",
	"title": "Tales from Indian Mythology Collection of 10 Books Story Books For Kids", 
	"author": "Yogi Panchal",
	"summary": "Indian Mythology is vast and absorbing with endless mesmerizing tales and legends. Tales from Indian Mythology is a captivating series of 10 books that aims to fascinate and educate young readers about our deep-rooted culture. Retold in a simple language with fantastic illustrations this series includes stories of Shiva, Durga, Krishna, Hanuman and much more. These tales are meant to guide young and old alike in and about Indian traditions and culture."

}

result:

1. Book updated if no book exists in db with the provided title
2. Book already exists with this title. if book is exists with title
3. Book not exists with this id. if book is not exists with provided id


# 5. Delete a book

endpoint: http://localhost:3000/api/delete
type: POST
Headers: <Content-Type: application/json>
input data: 
{
	"id": "654bcfa1505adc19a404aa63"
}

result:

1. Book not exists with this id. if book is not exists with provided id
2. Book Deleted if exists.


# DEMO VIDEO

https://www.loom.com/share/5cc4fd1eaebd4d8b875d238c20575efc?sid=e5d5b2d6-f025-4a7a-beb4-a2e7a6576845



