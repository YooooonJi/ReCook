# RECOOK

> #### Welcome to π [Recook](http://j4a204.p.ssafy.io/) π
> size : Responsive(387 x 858)


<br>

## Project Summary π§­

μ¬λ£ κΈ°λ° λ μνΌ μΆμ² μλΉμ€

##### πΈ μ μ λ°°κ²½

- μ½λ‘λ19λ‘ μΈν μΈμ κ°μ, μ§μμ μλ¦¬νλ νμ μ¦κ°
- μ§μμ μλ¦¬λ₯Ό νλ μ¬λλ€μ΄ μ¦κ°νλ©΄μ λ μνΌμ νμμ± μ¦κ°

##### πΈ μλΉμ€ μ»¨μ

- μ νν μ¬λ£λ‘ λ§λ€ μ μλ μλ¦¬ λ μνΌλ₯Ό μΆμ²ν΄μ£Όλ μλΉμ€
- μ¬λ£μ λ§λ λ μνΌλ₯Ό μΌμΌμ΄ μ°Ύμλ΄μΌ νλ λΆνΈν¨ ν΄μ

##### πΈ νκ²

- μ§μμ λ¨μ μ¬λ£λ‘ λ§μλ μλ¦¬λ₯Ό λ§λ€μ΄ λ¨Ήκ³  μΆμ μ¬λ

##### πΈ κΈ°κ°

- Feb 22th 2021 ~ Apr 9th 2021

##### πΈ κ²°κ³Όλ¬Ό

- [Architecture & Usecase_Diagram](./document/Architecture.md)
- [Sequance_Diagram](./document/SequanceDiagram.md)
- [PPT](./document/νΉνPJT_μ΅μ’λ°ν_A204_μ΅μ’.pdf)
- [UCC](https://www.youtube.com/watch?v=tknwLMpBXCE)





<br>

## Project Info :pushpin:

### Usage π

#### π» Front-end

- Vue.js

  - Project Setup

    ```bash
    $ npm install 
    ```

  - Compiles and hot-reloads for development

    ```bash
    $ npm run serve
    ```

  - Compiles and minifies for production

    ```bash
    $ npm run build
    ```

  - Run your tests

    ```bash
    $ npm run test
    ```

  - Lints and fixes files

    ```bash
    $ npm run lint
    ```

- Customize configuration

  - [Configuration Reference](https://cli.vuejs.org/config/)

#### π» Back-end

**Install**

- Java (Open JDK 14)

- Maven

- STS 

- Mariadb

  - create tables

    run dump.sql => [dump.sql](./document/dump.sql)

- Django

  - Project Setup

    ```bash
    $ pip3 install -r requirements.txt
    # μ€λ₯λλ λͺ¨λμ μλμΌλ‘ κΉμμ£ΌμΈμ
    ```

  - DB Connection

    ```bash
    $ python manage.py inspectdb
    ```
  
  - migration
  
    ``` bash
    $ python manage.py makemigrations
    ```
  
  - Run
  
    ```bash
    $ python manage.py runserver
    ```

<br>



### Tech Stack π§©

- Backend : Spring Boot, Django, MariaDB
- Frontend : Vue.js

![κΈ°μ μ€ν](https://user-images.githubusercontent.com/49190094/114417012-32b14e80-9bec-11eb-9798-f49d78d9ef22.png)



### Database Modeling :link:

![erd](https://user-images.githubusercontent.com/49190094/114417031-36dd6c00-9bec-11eb-8afa-9c911dd9b05e.png)


<br>



### Features :sparkles:

##### 	π λ©μΈ κΈ°λ₯

```
- μ μ μ μ·¨ν₯(μμμ’λ₯, μλ λ₯΄κΈ°)μ λΆμνκΈ° μν μ€λ¬Έμ‘°μ¬
- μ¬λ£λ₯Ό μ ννλ©΄ λ§λ€ μ μλ λ μνΌ μΆμ²
- μ¬μ©μμ μ·¨ν₯(μμμ’λ₯, μλ λ₯΄κΈ°)μ λΆμν κ°μΈ λ§μΆ€ν λ μνΌ μΆμ²
- κ° λ μνΌ λ§λ€ λΉμ·ν μ¬λ£λ₯Ό κ°μ§κ³  λ§λ€ μ μλ μ°κ΄ λ μνΌ μ κ³΅
```

##### 	π λΆκ° κΈ°λ₯

```
- ν΄λΉ λ μνΌμ ν¬ν¨λ μ μ μ μλ λ₯΄κΈ° μ λ³΄ μλ¦Ό
- λ μνΌλ₯Ό μ°ν΄ λκ³  λͺ¨μλ³Ό μ μλ κΈ°λ₯
- μ΅κ·Όμ λ³Έ λ μνΌ νμΈ κ°λ₯
- ν΄λΉ λ μνΌλ₯Ό λ³΄κ³  μ μ κ° λ§λ  μμ μ¬μ§ κ²μ κΈ°λ₯
- νμ μ λ€μ΄ κ²μν μμ μ¬μ§ λͺ¨μλ³΄κΈ° κΈ°λ₯
- μμ κ΄λ ¨ μμ μ κ³΅
```

##### 	π μ¬μ©ν λΉλ°μ΄ν° μΆμ² μκ³ λ¦¬μ¦
- νμ νν°λ§ Collaborative Filtering
- μ»¨νμΈ  κΈ°λ° νν°λ§ Content based Filtering

<br>



### Pages in Detail :mag:

> κ° νμ΄μ§ λ³ μκ°

- ##### Survey
- 
![μ·¨ν₯μ‘°μ¬](https://user-images.githubusercontent.com/49190094/114408285-393bc800-9be4-11eb-8ad7-7b94bb11289a.gif)

- ##### Main

![λ©μΈ](https://user-images.githubusercontent.com/49190094/114415988-2a0c4880-9beb-11eb-8877-6eeaf4a308f2.gif)


- ##### Recipe Detail


![λ μνΌμμΈ](https://user-images.githubusercontent.com/49190094/114416002-2e386600-9beb-11eb-9bb0-514c7ad5a0d5.gif)

  

- ##### Review

![λ¦¬λ·°λͺ¨μλ³΄κΈ°](https://user-images.githubusercontent.com/49190094/114409971-f0850e80-9be5-11eb-8ae9-b540b73c0e75.gif)
  

- ##### MyPage(My Review & Like)

  ![λ¦¬λ·°μ°](https://user-images.githubusercontent.com/49190094/114409943-ebc05a80-9be5-11eb-8d68-7c67d5989419.gif)

  

- ##### Cook Video

 ![μ νλΈ](https://user-images.githubusercontent.com/49190094/114409761-c2073380-9be5-11eb-8e3b-5b89a7c63b54.gif)

### Recipe Source π

#### μ¬μ©λ λ°μ΄ν° μμ€λ μμμ  λͺ©μ μ΄ μλ κ΅μ‘μ  λͺ©μ μΌλ‘λ§ μ¬μ©λμμμ μλ €λλ¦½λλ€.

- [ν΄λ¨Ήλ¨λ](https://haemukja.com/)



