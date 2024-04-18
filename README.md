<div align="center">
<h1 align="center">Smart QA Service</h1>
Quickly launch an intelligent customer service system with Flask, LLM, RAG, including frontend, backend, and admin console.
<br/>
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-1.jpg">
</div>


## Deploy the OpenKF Service

### 1. Download repository code

Clone the repository:

```shell
git clone https://github.com/open-kf/smart-qa-service.git && cd smart-qa-service
```

### 2. Configure variables of .env

Before starting the OpenKF service, you need to modify the related configurations for the program to initialize correctly. 

```shell
cp env_template .env
```

The variables in .env

```shell
DISKCACHE_DIR="diskcache_dir"
SQLITE_DB_DIR="sqlite_dir"
SQLITE_DB_NAME="mydatabase.sqlite3"
MAX_CRAWL_PARALLEL_REQUEST=5
CHROMA_DB_DIR="chroma_dir"
CHROMA_COLLECTION_NAME="mychroma_collection"
OPENAI_API_KEY="xxxx"
GPT_MODEL_NAME="gpt-3.5-turbo"
OPENAI_EMBEDDING_MODEL_NAME="text-embedding-3-small"
MAX_CHUNK_LENGTH=1300
MAX_QUERY_LENGTH=200
RECALL_TOP_K=5
COSINE_SIMILARITY_MAX_SCORE=0.6
MAX_HISTORY_SESSION_LENGTH=3
SESSION_EXPIRE_TIME=10800
SITE_TITLE="your site title"
STATIC_DIR="web"
URL_PREFIX="http://your-server-ip:7000/"
MEDIA_DIR="media_dir"
```

- Modify the **`OPENAI_API_KEY`** with your own key, obtainable by logging into the [OpenAI dashboard](https://platform.openai.com/api-keys).
- Change **`SITE_TITLE`** to reflect your website's name.
- Adjust **`URL_PREFIX`** to match your website's domain.
- Update the **`GPT_MODEL_NAME`** setting, replacing `gpt-3.5-turbo` with `gpt-4-turbo` if you wish to use GPT-4 Turbo.


### 3. Deploy OpenKF using Docker

```shell
docker-compose up --build
```

### 4. Deploy OpenKF from source code

####  4.1 Set up the Python running environment

It is recommended to install Python-related dependencies in a Python virtual environment to avoid affecting dependencies of other projects.

##### Create and activate a virtual environment

If you have not yet created a virtual environment, you can create one with the following command:

```shell
python3 -m venv myenv
```

After creation, activate the virtual environment:

```shell
source myenv/bin/activate
```

##### Install dependencies with pip

Once the virtual environment is activated, you can use `pip` to install the required dependencies. 

```shell
pip install -r requirements.txt
```

#### 4.2 Create SQLite Database

The OpenKF service uses SQLite as its storage DB. Before starting the OpenKF service, you need to execute the following command to initialize the database and add the default configuration for admin console.

```shell
python3 create_sqlite_db.py
```

#### 4.3 Start the service

If you have completed the steps above, you can try to start the OpenKF service by executing the following command.

- **Start single process:**

```shell
python3 smart_qa_app.py
```

- **Start multiple processes:**

```shell
sh start.sh
```

> [!NOTE]
> - The service port for OpenKF is **`7000`**. During the first test, please try not to change the port so that you can quickly experience the entire product process.
> - We recommend starting the OpenKF service using **`start.sh`** in multi-process mode for a smoother user experience.



## Configure the admin console

### 1. Login to the admin console

Access the admin console through the link **`http://your-server-ip:7000/open-kf-admin/`** to reach the login page. The default username and password are **`admin`** and **`open_kf_AIGC@2024`** (can be checked in `create_sqlite_db.py`).

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-2.jpg">
</div>

After logging in successfully, you will be able to see the configuration page of the admin console.

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-3.jpg">
</div>

On the page **`http://your-server-ip:7000/open-kf-admin/#/`**, you can set the following configurations:
- Choose the LLM base, currently only the `gpt-3.5-turbo` option is available, which will be gradually expanded.
- Initial Messages
- Suggested Messages
- Message Placeholder
- Profile Picture (upload a picture)
- Display name
- Chat icon (upload a picture)

### 2. Import your data

After submitting the website URL, once the server retrieves the list of all web page URLs via crawling, you can select the web page URLs you need as the knowledge base (all selected by default). The initial `Status` is **`Recorded`**.

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-4.jpg">
</div>

You can actively refresh the page **`http://your-server-ip:7000/open-kf-admin/#/source`** in your browser to get the progress of web page URL processing. After the content of the web page URL has been crawled, and the Embedding calculation and storage are completed, you can see the corresponding `Size` in the admin console, and the `Status` will also be updated to **`Stored`**.

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-5.jpg">
</div>

Clicking on a webpage's URL reveals how many sub-pages the webpage is divided into, and the text size of each sub-page.

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-10.jpg">
</div>

Clicking on a sub-page allows you to view its full text content. This will be very helpful for verifying the effects during the experience testing process.

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-11.jpg">
</div>

### 3. Test the chatbot

After importing website data in the admin console, you can experience the chatbot service through the link **`http://your-server-ip:7000/open-kf-chatbot/`**.

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-6.jpg">
</div>

### 4. Embed on your website

Through the admin console link **`http://your-server-ip:7000/open-kf-admin/#/embed`**, you can see the detailed tutorial for configuring the iframe in your website.

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-7.jpg">
</div>

<div align="center">
<br/>
<a href="https://docs.openim.io/" target="_blank"> OpenIM chatbot </a>
<br/>
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-8.jpg">
</div>

### 5. Dashboard of user's historical request

Through the admin console link **`http://your-server-ip:7000/open-kf-admin/#/dashboard`**, you can view the historical request records of all users within a specified time range.

<div align="center">
<img style="display: block; margin: auto; width: 70%;" src="./doc/screenshot-9.jpg">
</div>


## The frontend of admin console and chatbot
The OpenKF service integrates 2 frontend modules, and their source code information is as follows:

### admin console
> [Code Repository](https://github.com/open-kf/smart-qa-admin)

An intuitive web-based admin interface for Smart QA Service, offering comprehensive control over content, configuration, and user interactions. Enables effortless management of the knowledge base, real-time monitoring of queries and feedback, and continuous improvement based on user insights.

### chatbot
> [Code Repository](https://github.com/open-kf/smart-qa-h5)

An HTML5 interface for Smart QA Service designed for easy integration into websites via iframe, providing users direct access to a tailored knowledge base without leaving the site, enhancing functionality and immediate query resolution.

