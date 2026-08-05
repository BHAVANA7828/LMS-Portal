const coursesData = [
  {
    id: "dsa-cpp",
    title: "1. Data Structures & Algorithms in C++",
    modules: [
      { id: 1, title: "Module 1: C++ Foundations & Environment", videoUrl: "https://www.youtube.com/embed/B31LgI4Y4DQ", summary: "Pointers, memory layout, dynamic allocation (`new`/`delete`), and standard toolchain setup." },
      { id: 2, title: "Module 2: Time & Space Complexity", videoUrl: "https://www.youtube.com/embed/8hly31xKli0", summary: "Big-O, Omega, Theta notations, Master Theorem, and asymptotic analysis." },
      { id: 3, title: "Module 3: Dynamic Arrays & Vectors", videoUrl: "https://www.youtube.com/embed/PocJ5jXp8_U", summary: "C++ `std::vector` implementation, two-pointer approach, and sliding window patterns." },
      { id: 4, title: "Module 4: Linked Lists (Singly & Doubly)", videoUrl: "https://www.youtube.com/embed/CBYHwZcbD-s", summary: "List node manipulation, pointer reversal, Floyd's cycle detection algorithm." },
      { id: 5, title: "Module 5: Stacks & Queues", videoUrl: "https://www.youtube.com/embed/wjI1WNcIntg", summary: "LIFO/FIFO structures, array/linked list backings, infix to postfix conversions." },
      { id: 6, title: "Module 6: Binary Search Techniques", videoUrl: "https://www.youtube.com/embed/fB3c_8c6D8s", summary: "Binary search mechanics, order-agnostic search, rotated array queries." },
      { id: 7, title: "Module 7: Sorting Algorithms", videoUrl: "https://www.youtube.com/embed/PkJIb5tBRU0", summary: "Bubble, Selection, Insertion, Merge Sort, Quick Sort, and Counting/Radix Sort." },
      { id: 8, title: "Module 8: Binary Trees & BST", videoUrl: "https://www.youtube.com/embed/qH6yxkw0u7U", summary: "Tree traversals (DFS/BFS), BST operations, and AVL tree balancing rotations." },
      { id: 9, title: "Module 9: Graph Algorithms", videoUrl: "https://www.youtube.com/embed/tWVWeAqZ0WU", summary: "Adjacency lists, BFS, DFS, Dijkstra, Bellman-Ford, Prim's, and Kruskal's MST." },
      { id: 10, title: "Module 10: Dynamic Programming & Greedy", videoUrl: "https://www.youtube.com/embed/vYquumk4nWw", summary: "Memoization vs Tabulation, 0/1 Knapsack, LCS, and Matrix Chain Multiplication." }
    ]
  },
  {
    id: "java-fullstack",
    title: "2. Java Full Stack Development",
    modules: [
      { id: 1, title: "Module 1: Java & JDK Fundamentals", videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34", summary: "JDK, JRE, JVM architecture, bytecode compilation, JIT compiler, and basic syntax." },
      { id: 2, title: "Module 2: Object-Oriented Java", videoUrl: "https://www.youtube.com/embed/A74TOX803D0", summary: "Encapsulation, Abstraction, Inheritance, Polymorphism, and Interfaces." },
      { id: 3, title: "Module 3: Java Collections Framework", videoUrl: "https://www.youtube.com/embed/viTHc_4XfCA", summary: "List, Set, Map hierarchies, `ArrayList`, `HashMap` internal mechanics." },
      { id: 4, title: "Module 4: Multithreading & Concurrency", videoUrl: "https://www.youtube.com/embed/L1OOn2j2b6g", summary: "Thread lifecycle, synchronized blocks, volatile keywords, and ExecutorService." },
      { id: 5, title: "Module 5: Maven & Dependency Management", videoUrl: "https://www.youtube.com/embed/1Q_1S8_N3L0", summary: "Managing `pom.xml`, build lifecycles, and dependency resolution." },
      { id: 6, title: "Module 6: Spring Boot Core Concepts", videoUrl: "https://www.youtube.com/embed/9SGDpanrc8U", summary: "Spring IoC Container, Dependency Injection, and `@Component`/`@Service` annotations." },
      { id: 7, title: "Module 7: RESTful APIs with Spring Boot", videoUrl: "https://www.youtube.com/embed/35EQXmHKZYs", summary: "Building `@RestController` endpoints, handling JSON requests, and `@ControllerAdvice`." },
      { id: 8, title: "Module 8: Spring Data JPA & Hibernate", videoUrl: "https://www.youtube.com/embed/8SGI_XS5OPw", summary: "ORM mapping, `@Entity`, `@OneToMany` relationships, and custom JPQL queries." },
      { id: 9, title: "Module 9: Spring Security & JWT", videoUrl: "https://www.youtube.com/embed/X80nJ5T7YpE", summary: "Configuring security chains, password encoding, and JWT authentication filters." },
      { id: 10, title: "Module 10: Frontend Integration", videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8", summary: "CORS configuration, connecting React/Angular frontends, end-to-end fullstack deployment." }
    ]
  },
  {
    id: "python-ds",
    title: "3. Python & Data Science",
    modules: [
      { id: 1, title: "Module 1: Python Language Foundations", videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw", summary: "Data types, control structures, functions, lambda expressions, and environment setup." },
      { id: 2, title: "Module 2: Data Structures & File Handling", videoUrl: "https://www.youtube.com/embed/k9TUPpGqYTo", summary: "Lists, tuples, dictionaries, sets, list comprehensions, and JSON file parsing." },
      { id: 3, title: "Module 3: Numerical Python (NumPy)", videoUrl: "https://www.youtube.com/embed/QUT1VHiLgI4", summary: "N-dimensional arrays, matrix broadcasting, array slicing, and linear algebra operations." },
      { id: 4, title: "Module 4: Data Analysis with Pandas", videoUrl: "https://www.youtube.com/embed/vmEHCJofslg", summary: "Series and DataFrames, data cleaning, handling missing values, and aggregation (`groupby`)." },
      { id: 5, title: "Module 5: Data Visualization", videoUrl: "https://www.youtube.com/embed/DAQNzxGl_pI", summary: "Plotting line, bar, scatter, box plots, and heatmaps using Matplotlib and Seaborn." },
      { id: 6, title: "Module 6: Exploratory Data Analysis (EDA)", videoUrl: "https://www.youtube.com/embed/livU3f_v2L0", summary: "Univariate/Bivariate analysis, outlier detection (IQR/Z-score), and feature correlation." },
      { id: 7, title: "Module 7: Applied Statistics & Probability", videoUrl: "https://www.youtube.com/embed/7OIwX3L-u74", summary: "Descriptive statistics, normal distributions, Central Limit Theorem, and hypothesis testing." },
      { id: 8, title: "Module 8: Introduction to Scikit-Learn", videoUrl: "https://www.youtube.com/embed/pqNCD_5r0IU", summary: "Model fitting workflow, train-test splits, cross-validation, and metrics (MSE, R2)." },
      { id: 9, title: "Module 9: Supervised Learning Models", videoUrl: "https://www.youtube.com/embed/I3FBJ3R_90w", summary: "Linear Regression, Logistic Regression, Decision Trees, and Random Forests." },
      { id: 10, title: "Module 10: Model Tuning & Pipelines", videoUrl: "https://www.youtube.com/embed/HdlDYng8g9s", summary: "Overfitting vs Underfitting, GridSearchCV, feature scaling, and Scikit-Learn pipelines." }
    ]
  },
  {
    id: "web-dev",
    title: "4. Full-Stack Web Development",
    modules: [
      { id: 1, title: "Module 1: HTML5 Structure & Semantics", videoUrl: "https://www.youtube.com/embed/G3E-cpL7ofg", summary: "Semantic elements, forms, accessibility (WCAG), and modern document layout." },
      { id: 2, title: "Module 2: CSS3 & Flexbox Layouts", videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc", summary: "Selectors, specificity rules, box model, and flexible box layout strategies." },
      { id: 3, title: "Module 3: CSS Grid & Responsive Design", videoUrl: "https://www.youtube.com/embed/jV8B24rSN5o", summary: "Grid tracks, media queries, mobile-first design, and custom properties." },
      { id: 4, title: "Module 4: Modern JavaScript Fundamentals", videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk", summary: "Variables, ES6 features, functions, scope, and control flow." },
      { id: 5, title: "Module 5: DOM Manipulation & Events", videoUrl: "https://www.youtube.com/embed/hdI2bqOjy3c", summary: "Query selectors, modifying elements, event delegation, and bubbling." },
      { id: 6, title: "Module 6: Asynchronous JS (Promises / Async-Await)", videoUrl: "https://www.youtube.com/embed/PoRJizFvM7s", summary: "Event loop, callbacks, Promises, and `async/await` syntax." },
      { id: 7, title: "Module 7: API Consumption with Fetch/Axios", videoUrl: "https://www.youtube.com/embed/cuEtnrL9-H0", summary: "HTTP requests (GET/POST), JSON parsing, headers, and error handling." },
      { id: 8, title: "Module 8: Git & GitHub Workflow", videoUrl: "https://www.youtube.com/embed/RGOj5yH7evE", summary: "Repositories, branching, merging, pull requests, and conflict resolution." },
      { id: 9, title: "Module 9: Node.js & Express API Basics", videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE", summary: "Node runtime, NPM, Express routing, and middleware pipelines." },
      { id: 10, title: "Module 10: MongoDB & Mongoose Integration", videoUrl: "https://www.youtube.com/embed/c2M-35ybUJE", summary: "NoSQL document storage, Mongoose schemas, models, and CRUD operations." }
    ]
  },
  {
    id: "cybersecurity",
    title: "5. Cybersecurity & Ethical Hacking",
    modules: [
      { id: 1, title: "Module 1: Introduction to Cybersecurity", videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA", summary: "CIA Triad, Cyber Kill Chain, threat actor modeling, and vulnerability management." },
      { id: 2, title: "Module 2: Networking Fundamentals for Hackers", videoUrl: "https://www.youtube.com/embed/qiQR5rTSshw", summary: "OSI model, TCP/IP stack, ARP, DNS, HTTP/S, and socket connections." },
      { id: 3, title: "Module 3: Network Scanning with Nmap", videoUrl: "https://www.youtube.com/embed/4t4kBkMsDbY", summary: "Active vs passive recon, SYN/UDP scans, OS detection, and NSE scripts." },
      { id: 4, title: "Module 4: Packet Inspection with Wireshark", videoUrl: "https://www.youtube.com/embed/TkCSr30UojM", summary: "Capture filters, display filters, stream inspection, and threat detection." },
      { id: 5, title: "Module 5: Web Security & OWASP Top 10", videoUrl: "https://www.youtube.com/embed/F-S1y0P5o5k", summary: "SQL Injection, XSS, CSRF, broken access control, and Burp Suite usage." },
      { id: 6, title: "Module 6: Penetration Testing with Metasploit", videoUrl: "https://www.youtube.com/embed/8lR27r8Y_10", summary: "Exploit execution, Meterpreter shells, privilege escalation, and pivoting." },
      { id: 7, title: "Module 7: Applied Cryptography", videoUrl: "https://www.youtube.com/embed/NmM9HA2MQGI", summary: "Symmetric/Asymmetric encryption, hashing, digital certificates, and TLS." },
      { id: 8, title: "Module 8: Social Engineering & Phishing", videoUrl: "https://www.youtube.com/embed/8C0s0w0c4f8", summary: "Spear phishing, SET tool, email authentication (SPF, DKIM, DMARC)." },
      { id: 9, title: "Module 9: Incident Response & Forensics", videoUrl: "https://www.youtube.com/embed/3v4g4i5S3_s", summary: "NIST framework, memory forensics (Volatility), and registry/log analysis." },
      { id: 10, title: "Module 10: SIEM & Log Monitoring", videoUrl: "https://www.youtube.com/embed/9G3Xg2c-q-0", summary: "Centralized logging, correlation rules, Splunk/Elastic SIEM, and SOC workflow." }
    ]
  },
  {
    id: "react-js",
    title: "6. React.js & Frontend Engineering",
    modules: [
      { id: 1, title: "Module 1: React Fundamentals & JSX", videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8", summary: "Virtual DOM, JSX syntax, Vite setup, and component rendering." },
      { id: 2, title: "Module 2: Props & State Management", videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA", summary: "Component communication via props, state using `useState` hook." },
      { id: 3, title: "Module 3: React Hooks (useEffect, useRef)", videoUrl: "https://www.youtube.com/embed/0ZJgOiRWETI", summary: "Side effects, lifecycle management, DOM references, and custom hooks." },
      { id: 4, title: "Module 4: Forms & Input Handling", videoUrl: "https://www.youtube.com/embed/SdzLLX19uYg", summary: "Controlled vs uncontrolled components, React Hook Form, and validation." },
      { id: 5, title: "Module 5: Routing with React Router v6", videoUrl: "https://www.youtube.com/embed/59IXY5IDubY", summary: "Dynamic routes, navigation hooks, nested routes, and route protection." },
      { id: 6, title: "Module 6: Context API & State Sharing", videoUrl: "https://www.youtube.com/embed/35lXWv45J28", summary: "Global state management without prop drilling using `useContext` and `useReducer`." },
      { id: 7, title: "Module 7: Redux Toolkit Masterclass", videoUrl: "https://www.youtube.com/embed/NqzdVN2tyvQ", summary: "Slices, reducers, store configuration, and async thunks (`createAsyncThunk`)." },
      { id: 8, title: "Module 8: Performance Optimization", videoUrl: "https://www.youtube.com/embed/7sgsgThKngs", summary: "`useMemo`, `useCallback`, `React.memo`, code splitting, and lazy loading." },
      { id: 9, title: "Module 9: Styling in React (Tailwind / Styled)", videoUrl: "https://www.youtube.com/embed/ft30zcMlFao", summary: "Tailwind CSS integration, utility-first styling, and CSS modules." },
      { id: 10, title: "Module 10: Building & Deploying React Apps", videoUrl: "https://www.youtube.com/embed/2-crBg6wpp0", summary: "Production builds, environment variables, Vercel/Netlify deployments." }
    ]
  },
  {
    id: "nodejs-backend",
    title: "7. Node.js & Express Microservices",
    modules: [
      { id: 1, title: "Module 1: Node.js Architecture", videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4", summary: "Event Loop, V8 Engine, Non-blocking I/O, and Core Modules (`fs`, `path`, `http`)." },
      { id: 2, title: "Module 2: Express.js Core Framework", videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE", summary: "Router setup, middleware functions, request parsing, and error handling." },
      { id: 3, title: "Module 3: REST API Architecture", videoUrl: "https://www.youtube.com/embed/l8WPWK9mS5M", summary: "REST conventions, status codes, controller-service pattern, and JSON format." },
      { id: 4, title: "Module 4: Authentication with JWT & Bcrypt", videoUrl: "https://www.youtube.com/embed/mbsmsi7l3r4", summary: "Password hashing, JWT signing/verification, and auth middleware." },
      { id: 5, title: "Module 5: Database Connection (Prisma / Mongoose)", videoUrl: "https://www.youtube.com/embed/RebA5J405mU", summary: "Connecting SQL/NoSQL databases, schema definition, and migration tools." },
      { id: 6, title: "Module 6: Input Validation & Sanitization", videoUrl: "https://www.youtube.com/embed/9B01JvA0aG0", summary: "Express-validator, Zod schema validation, and preventing injection attacks." },
      { id: 7, title: "Module 7: Real-Time Applications with Socket.io", videoUrl: "https://www.youtube.com/embed/ZKEqqIO7n-w", summary: "WebSockets protocol, real-time messaging, events, and room management." },
      { id: 8, title: "Module 8: File Uploads & Cloud Storage", videoUrl: "https://www.youtube.com/embed/srPXMt1Q0nY", summary: "Multer middleware, stream uploads, and AWS S3 bucket integration." },
      { id: 9, title: "Module 9: Microservices Architecture", videoUrl: "https://www.youtube.com/embed/CdBtNQHG18c", summary: "Monolith vs Microservices, API Gateways, and message queues (RabbitMQ/Kafka)." },
      { id: 10, title: "Module 10: Production Deployment & PM2", videoUrl: "https://www.youtube.com/embed/e1u9jAnS53k", summary: "PM2 process manager, environment setup, logging (Winston), and Dockerization." }
    ]
  },
  {
    id: "aws-cloud",
    title: "8. Cloud Computing with AWS",
    modules: [
      { id: 1, title: "Module 1: AWS Fundamentals & Cloud Concepts", videoUrl: "https://www.youtube.com/embed/ulprqHHWlng", summary: "Global Infrastructure, Regions, Availability Zones, and AWS Management Console." },
      { id: 2, title: "Module 2: IAM (Identity & Access Management)", videoUrl: "https://www.youtube.com/embed/8t3XhXp_6kE", summary: "Users, Groups, Roles, Policies, and multi-factor authentication security." },
      { id: 3, title: "Module 3: Amazon EC2 Virtual Machines", videoUrl: "https://www.youtube.com/embed/i32_o-A4TGE", summary: "Instance types, Security Groups, Key pairs, and EBS storage volumes." },
      { id: 4, title: "Module 4: Amazon S3 Storage", videoUrl: "https://www.youtube.com/embed/v33Kl-K3P4s", summary: "Buckets, object storage, life cycle policies, static hosting, and security." },
      { id: 5, title: "Module 5: AWS Networking & VPC", videoUrl: "https://www.youtube.com/embed/g2JOHLHh4eI", summary: "Subnets, Internet Gateways, Route Tables, NAT Gateways, and Network ACLs." },
      { id: 6, title: "Module 6: Relational Databases (Amazon RDS)", videoUrl: "https://www.youtube.com/embed/4W1mS5yLpL4", summary: "Provisioning RDS instances, Multi-AZ deployments, and automated backups." },
      { id: 7, title: "Module 7: Serverless Computing (AWS Lambda)", videoUrl: "https://www.youtube.com/embed/eOBq__h4OJ4", summary: "Event-driven functions, API Gateway integration, and serverless architectures." },
      { id: 8, title: "Module 8: Load Balancing & Auto Scaling", videoUrl: "https://www.youtube.com/embed/6i8w7dG5m3A", summary: "Application Load Balancers (ALB), Auto Scaling Groups, and health checks." },
      { id: 9, title: "Module 9: CloudWatch & Security Audit", videoUrl: "https://www.youtube.com/embed/7O0S3N592i4", summary: "Monitoring metrics, alarms, CloudTrail logging, and cost optimization." },
      { id: 10, title: "Module 10: Infrastructure as Code (Terraform)", videoUrl: "https://www.youtube.com/embed/7xngnjfIlK4", summary: "Automating AWS resource deployment using Terraform files and state management." }
    ]
  },
  {
    id: "devops-docker",
    title: "9. Docker & Kubernetes (DevOps)",
    modules: [
      { id: 1, title: "Module 1: DevOps & Containerization Overview", videoUrl: "https://www.youtube.com/embed/3c-iBn73dDE", summary: "VMs vs Containers, Docker engine, and modern CI/CD architecture." },
      { id: 2, title: "Module 2: Docker Commands & Images", videoUrl: "https://www.youtube.com/embed/fqMOX6JJhGo", summary: "Docker hub, `docker run`, `exec`, `ps`, and image layer caching mechanics." },
      { id: 3, title: "Module 3: Writing Dockerfiles", videoUrl: "https://www.youtube.com/embed/gAkwW2tuIqE", summary: "Multi-stage builds, base images, environment variables, and optimized layers." },
      { id: 4, title: "Module 4: Docker Compose Multi-Container", videoUrl: "https://www.youtube.com/embed/HG6yIjZapSA", summary: "Defining services, networks, volumes, and running full-stack app clusters." },
      { id: 5, title: "Module 5: Kubernetes Architecture Fundamentals", videoUrl: "https://www.youtube.com/embed/X48VuDVv0do", summary: "Control plane, Worker nodes, Kubelet, Pods, and API Server workflow." },
      { id: 6, title: "Module 6: K8s Deployments & Services", videoUrl: "https://www.youtube.com/embed/7XDeI5fyj3w", summary: "Declarative YAML specs, ReplicaSets, ClusterIP, NodePort, and LoadBalancer." },
      { id: 7, title: "Module 7: K8s ConfigMaps & Secrets", videoUrl: "https://www.youtube.com/embed/0S30P6wYlW0", summary: "Managing configuration variables, sensitive keys, and mounting volumes." },
      { id: 8, title: "Module 8: Helm Package Manager", videoUrl: "https://www.youtube.com/embed/j1_fllH4N_k", summary: "Templating Kubernetes manifests, Helm charts, releases, and rollbacks." },
      { id: 9, title: "Module 9: CI/CD Pipelines (GitHub Actions)", videoUrl: "https://www.youtube.com/embed/R8_veQiYzj0", summary: "Automated builds, automated testing, container registry push, and cluster deployment." },
      { id: 10, title: "Module 10: Production Observability (Prometheus/Grafana)", videoUrl: "https://www.youtube.com/embed/mP_L-3yC2kM", summary: "Scraping metrics, cluster alerts, and building Grafana dashboards." }
    ]
  },
  {
    id: "machine-learning",
    title: "10. Machine Learning & Deep Learning",
    modules: [
      { id: 1, title: "Module 1: Machine Learning Overview & Setup", videoUrl: "https://www.youtube.com/embed/i_LwzRVP7bg", summary: "Supervised vs Unsupervised learning, Anaconda setup, Jupyter environment." },
      { id: 2, title: "Module 2: Linear & Multiple Regression", videoUrl: "https://www.youtube.com/embed/J_LnPL3Qg70", summary: "Cost functions, Gradient Descent algorithm, and model fitting with Scikit-Learn." },
      { id: 3, title: "Module 3: Logistic Regression & Classification", videoUrl: "https://www.youtube.com/embed/yIYKR4sgzI8", summary: "Sigmoid function, binary classification, precision, recall, and ROC curves." },
      { id: 4, title: "Module 4: Decision Trees & Random Forests", videoUrl: "https://www.youtube.com/embed/v6VJ2RO66Ag", summary: "Gini impurity, entropy, decision boundaries, and ensemble bagging strategies." },
      { id: 5, title: "Module 5: Support Vector Machines & KNN", videoUrl: "https://www.youtube.com/embed/efR1C6CvhmE", summary: "Hyperplanes, kernel trick, soft margins, and distance metrics for KNN." },
      { id: 6, title: "Module 6: Unsupervised Learning & K-Means", videoUrl: "https://www.youtube.com/embed/4b5d3muPQcU", summary: "Clustering mechanisms, elbow method, and Principal Component Analysis (PCA)." },
      { id: 7, title: "Module 7: Neural Networks Architecture", videoUrl: "https://www.youtube.com/embed/aircAruvnKk", summary: "Perceptrons, activation functions (ReLU, Sigmoid), and Backpropagation." },
      { id: 8, title: "Module 8: Deep Learning with TensorFlow/PyTorch", videoUrl: "https://www.youtube.com/embed/tPYj3fFJGjk", summary: "Building Multi-Layer Perceptrons (MLP), loss functions, and optimizers (Adam)." },
      { id: 9, title: "Module 9: Convolutional Neural Networks (CNN)", videoUrl: "https://www.youtube.com/embed/YRhxdVk_sIs", summary: "Convolutional layers, pooling layers, feature maps, and computer vision." },
      { id: 10, title: "Module 10: Natural Language Processing (NLP)", videoUrl: "https://www.youtube.com/embed/CMrHM8a3hqw", summary: "Text tokenization, embeddings (Word2Vec), RNNs, Transformers, and LLM overview." }
    ]
  },
  {
    id: "sql-database",
    title: "11. SQL & Relational Database Design",
    modules: [
      { id: 1, title: "Module 1: Relational Database Concepts", videoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY", summary: "RDBMS architecture, tables, primary keys, foreign keys, and ER diagrams." },
      { id: 2, title: "Module 2: Basic SQL Queries (SELECT, WHERE)", videoUrl: "https://www.youtube.com/embed/7S_tz1z_5bA", summary: "Filtering data, sorting (`ORDER BY`), limiting results, and logical operators." },
      { id: 3, title: "Module 3: Aggregations & Grouping", videoUrl: "https://www.youtube.com/embed/2_mIuL5k3p4", summary: "`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`, `GROUP BY`, and `HAVING` clause filtering." },
      { id: 4, title: "Module 4: Joins (Inner, Left, Right, Full)", videoUrl: "https://www.youtube.com/embed/9yeOJ0ZMUYw", summary: "Combining tables, inner joins, outer joins, self joins, and cross joins." },
      { id: 5, title: "Module 5: Subqueries & Complex Queries", videoUrl: "https://www.youtube.com/embed/NfI6I0iQ_G0", summary: "Correlated subqueries, nested `SELECT` statements, and `EXISTS` operators." },
      { id: 6, title: "Module 6: Window Functions", videoUrl: "https://www.youtube.com/embed/Ww71knvhQ-s", summary: "`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LEAD()`, `LAG()`, and `PARTITION BY`." },
      { id: 7, title: "Module 7: Database Normalization (1NF to 3NF)", videoUrl: "https://www.youtube.com/embed/UrYLYV7WshM", summary: "Eliminating redundancy, functional dependencies, 1NF, 2NF, 3NF, and BCNF." },
      { id: 8, title: "Module 8: Indexing & Performance Tuning", videoUrl: "https://www.youtube.com/embed/fsG1XA_U3-U", summary: "B-Tree indexes, query execution plans, scanning vs lookup performance." },
      { id: 9, title: "Module 9: Transactions & ACID Properties", videoUrl: "https://www.youtube.com/embed/aL-S11XnQ4Y", summary: "Atomicity, Consistency, Isolation, Durability, locking, and deadlocks." },
      { id: 10, title: "Module 10: Stored Procedures & Triggers", videoUrl: "https://www.youtube.com/embed/0B3EwG3N2S8", summary: "PL/SQL scripts, database triggers, functions, and automated data checks." }
    ]
  },
  {
    id: "cpp-mastery",
    title: "12. C++ Systems Programming",
    modules: [
      { id: 1, title: "Module 1: C++ Environment & Standard", videoUrl: "https://www.youtube.com/embed/1v_4dL8l3eM", summary: "Modern C++ (C++17/20), compilation flags, makefiles, and memory model." },
      { id: 2, title: "Module 2: Deep Dive into Pointers", videoUrl: "https://www.youtube.com/embed/zuegQmMdy8M", summary: "Pointer arithmetic, double pointers, function pointers, and raw memory management." },
      { id: 3, title: "Module 3: Smart Pointers & Memory Safety", videoUrl: "https://www.youtube.com/embed/UOB7-B2MkpA", summary: "`std::unique_ptr`, `std::shared_ptr`, `std::weak_ptr`, and avoiding leaks." },
      { id: 4, title: "Module 4: OOP & Inheritance Hierarchy", videoUrl: "https://www.youtube.com/embed/wN0x9eZLup4", summary: "Virtual functions, vtables, abstract base classes, and multiple inheritance." },
      { id: 5, title: "Module 5: Templates & Generic Programming", videoUrl: "https://www.youtube.com/embed/I-hZkUa9mIs", summary: "Function templates, class templates, and template metaprogramming basics." },
      { id: 6, title: "Module 6: Standard Template Library (STL)", videoUrl: "https://www.youtube.com/embed/std_cpp_stl", summary: "Vectors, lists, maps, sets, iterators, and STL algorithm utilities." },
      { id: 7, title: "Module 7: Move Semantics & Rvalue References", videoUrl: "https://www.youtube.com/embed/IOkgBrX621Q", summary: "Copy constructors vs move constructors, `std::move`, and rule of five." },
      { id: 8, title: "Module 8: Multithreading in C++", videoUrl: "https://www.youtube.com/embed/3qrKj3P233k", summary: "`std::thread`, mutexes, `std::lock_guard`, condition variables, and atomics." },
      { id: 9, title: "Module 9: File I/O & Binary Serialization", videoUrl: "https://www.youtube.com/embed/E-0M2qO4u6s", summary: "Fstream streams, custom binary binary buffers, and file operations." },
      { id: 10, title: "Module 10: Building C++ Projects", videoUrl: "https://www.youtube.com/embed/V9E_a-5S_vU", summary: "CMake build generator, linking external libraries, and profiling C++ apps." }
    ]
  },
  {
    id: "android-kotlin",
    title: "13. Android App Development with Kotlin",
    modules: [
      { id: 1, title: "Module 1: Kotlin Syntax & Basics", videoUrl: "https://www.youtube.com/embed/F9UC9DY-vIU", summary: "Variables, null safety (`?`), functions, classes, and Kotlin fundamentals." },
      { id: 2, title: "Module 2: Android Studio & App Anatomy", videoUrl: "https://www.youtube.com/embed/fis26HvvDII", summary: "Activities, layout XML, AndroidManifest, Gradle build configuration." },
      { id: 3, title: "Module 3: Jetpack Compose UI", videoUrl: "https://www.youtube.com/embed/cDabx3SjuOY", summary: "Declarative UI design, Composables, State management, and layout modifiers." },
      { id: 4, title: "Module 4: RecyclerView & Lists", videoUrl: "https://www.youtube.com/embed/Mc0XT58A18k", summary: "Displaying dynamic lists, ViewHolders, Adapters, and click listeners." },
      { id: 5, title: "Module 5: ViewModel & LiveData Architecture", videoUrl: "https://www.youtube.com/embed/5qlIPT1ER48", summary: "MVVM pattern, surviving configuration changes, and state observation." },
      { id: 6, title: "Module 6: Kotlin Coroutines & Asynchronous Code", videoUrl: "https://www.youtube.com/embed/BOHK_w0907M", summary: "Suspend functions, CoroutineScope, Dispatchers (Main/IO), and Flows." },
      { id: 7, title: "Module 7: REST API Integration with Retrofit", videoUrl: "https://www.youtube.com/embed/t6R_KstSAnA", summary: "Retrofit interfaces, Gson converter, network calls, and error handling." },
      { id: 8, title: "Module 8: Room Local Database", videoUrl: "https://www.youtube.com/embed/bOd3wO0uKn8", summary: "Entities, DAOs, Room database creation, and offline data caching." },
      { id: 9, title: "Module 9: Android Navigation Component", videoUrl: "https://www.youtube.com/embed/2_S88G2oJ_0", summary: "Navigation graph, SafeArgs, passing arguments, and bottom navigation." },
      { id: 10, title: "Module 10: App Publishing on Google Play", videoUrl: "https://www.youtube.com/embed/Play_store_pub", summary: "Signing APK/App Bundle, Play Console configuration, and release builds." }
    ]
  },
  {
    id: "ios-swift",
    title: "14. iOS App Development with Swift",
    modules: [
      { id: 1, title: "Module 1: Swift Language Basics", videoUrl: "https://www.youtube.com/embed/Ulp1Kimblg0", summary: "Optionuals, structs, classes, protocols, closures, and Swift syntax." },
      { id: 2, title: "Module 2: Xcode & iOS App Structure", videoUrl: "https://www.youtube.com/embed/09TeUXjzpKs", summary: "Xcode IDE, iOS simulator, project files, and application lifecycle." },
      { id: 3, title: "Module 3: SwiftUI Layout Mechanics", videoUrl: "https://www.youtube.com/embed/F2ojC6TN5As", summary: "VStack, HStack, ZStack, State properties (`@State`, `@Binding`)." },
      { id: 4, title: "Module 4: List Views & Navigation", videoUrl: "https://www.youtube.com/embed/x-6S4gZ4bWw", summary: "SwiftUI Lists, NavigationStack, passing objects, and custom views." },
      { id: 5, title: "Module 5: Observable Objects & MVVM", videoUrl: "https://www.youtube.com/embed/M0T1bE2E4u0", summary: "`@StateObject`, `@ObservedObject`, MVVM architecture pattern." },
      { id: 6, title: "Module 6: Swift Concurrency (Async/Await)", videoUrl: "https://www.youtube.com/embed/Jc8q_O_k4B8", summary: "Task cancellation, actors, `async`/`await` networking execution." },
      { id: 7, title: "Module 7: Networking with URLSession", videoUrl: "https://www.youtube.com/embed/SQr_7a5KqEw", summary: "Fetching JSON APIs, Codable protocol, decoding data models." },
      { id: 8, title: "Module 8: CoreData & SwiftData", videoUrl: "https://www.youtube.com/embed/3A20B76sXkE", summary: "Persistent local data storage, schema generation, and CRUD operations." },
      { id: 9, title: "Module 9: Gestures & Animations", videoUrl: "https://www.youtube.com/embed/8_3a152K45c", summary: "Implicit vs explicit animations, gestures, and custom view transitions." },
      { id: 10, title: "Module 10: App Store Submission", videoUrl: "https://www.youtube.com/embed/App_store_pub", summary: "App Store Connect, provisioning profiles, certificates, and app store review." }
    ]
  },
  {
    id: "golang-backend",
    title: "15. Go (Golang) Microservices",
    modules: [
      { id: 1, title: "Module 1: Go Syntax & Core Types", videoUrl: "https://www.youtube.com/embed/YS4e4q9oBaU", summary: "Pointers, structs, slices, maps, and package organization in Go." },
      { id: 2, title: "Module 2: Interfaces & Explicit Errors", videoUrl: "https://www.youtube.com/embed/qS008-540mE", summary: "Duck typing interfaces, custom error handling, and `defer` statements." },
      { id: 3, title: "Module 3: Goroutines & Channels", videoUrl: "https://www.youtube.com/embed/LvgVSSpwND8", summary: "Concurrent programming, channels, select blocks, and sync primitives." },
      { id: 4, title: "Module 4: Building REST APIs (Gin/Chi)", videoUrl: "https://www.youtube.com/embed/8uiZC0l4Ajw", summary: "Routing, JSON binding, middleware chains, and HTTP handler functions." },
      { id: 5, title: "Module 5: Database Operations (SQLx / GORM)", videoUrl: "https://www.youtube.com/embed/W_50wH4G-dE", summary: "Connecting PostgreSQL, running migrations, and query execution." },
      { id: 6, title: "Module 6: gRPC & Protocol Buffers", videoUrl: "https://www.youtube.com/embed/B_508a8W32o", summary: "Protobuf schema definition, gRPC services, and high-speed RPC communications." },
      { id: 7, title: "Module 7: Unit Testing & Benchmarking", videoUrl: "https://www.youtube.com/embed/hV4S1G9B3eM", summary: "Built-in `testing` package, mock objects, table-driven tests, and benchmarks." },
      { id: 8, title: "Module 8: Microservice Communication", videoUrl: "https://www.youtube.com/embed/4M832s29c9w", summary: "Event-driven architecture with NATS / Kafka in Go environment." },
      { id: 9, title: "Module 9: Context & Timeout Control", videoUrl: "https://www.youtube.com/embed/ctx_go_lang", summary: "Passing contexts, deadline cancellations, and request tracing." },
      { id: 10, title: "Module 10: Dockerizing Go Microservices", videoUrl: "https://www.youtube.com/embed/docker_golang", summary: "Scratch docker builds, binary compilation, and lightweight deployments." }
    ]
  },
  {
    id: "system-design",
    title: "16. System Design & Architecture",
    modules: [
      { id: 1, title: "Module 1: High-Level System Architecture", videoUrl: "https://www.youtube.com/embed/UzLMhqg3_Wc", summary: "Scalability, Availability, Consistency, Reliability, and SLA targets." },
      { id: 2, title: "Module 2: Load Balancing Strategies", videoUrl: "https://www.youtube.com/embed/K0Ta65OqQkY", summary: "Layer 4 vs Layer 7 load balancing, Consistent Hashing algorithms." },
      { id: 3, title: "Module 3: Caching Systems (Redis/Memcached)", videoUrl: "https://www.youtube.com/embed/6b3J9C31pXw", summary: "Cache invalidation strategies, Cache-Aside, Write-Through, and eviction policies." },
      { id: 4, title: "Module 4: Database Sharding & Replication", videoUrl: "https://www.youtube.com/embed/5faMjKuB9bc", summary: "Horizontal partitioning, Master-Slave replication, and split-brain resolution." },
      { id: 5, title: "Module 5: CAP Theorem & PACELC", videoUrl: "https://www.youtube.com/embed/k-YfO_L1XQY", summary: "Consistency vs Availability tradeoffs in distributed data stores." },
      { id: 6, title: "Module 6: Message Queues & Event-Driven Architecture", videoUrl: "https://www.youtube.com/embed/oJBF4I4W2sE", summary: "Kafka, RabbitMQ, pub/sub mechanisms, and asynchronous worker queues." },
      { id: 7, title: "Module 7: Rate Limiting Algorithms", videoUrl: "https://www.youtube.com/embed/FU4WlwfS3G0", summary: "Token Bucket, Leaky Bucket, Sliding Window Counter algorithms." },
      { id: 8, title: "Module 8: Designing URL Shortener (TinyURL)", videoUrl: "https://www.youtube.com/embed/fMZMmG20p9Y", summary: "Base62 encoding, database design, unique key generation, and caching." },
      { id: 9, title: "Module 9: Designing WhatsApp / Chat Application", videoUrl: "https://www.youtube.com/embed/vvhC64hQutM", summary: "WebSockets, presence servers, message store DB, and offline push alerts." },
      { id: 10, title: "Module 10: Designing Video Streaming (YouTube)", videoUrl: "https://www.youtube.com/embed/jK31ucX22ZU", summary: "CDN delivery, adaptive bitrate streaming (HLS), and video encoding pipelines." }
    ]
  },
  {
    id: "spring-boot",
    title: "17. Spring Boot Enterprise Applications",
    modules: [
      { id: 1, title: "Module 1: Spring Framework Internal Architecture", videoUrl: "https://www.youtube.com/embed/9SGDpanrc8U", summary: "Bean lifecycle, ApplicationContext, reflection, and configuration classes." },
      { id: 2, title: "Module 2: Spring MVC Request Lifecycle", videoUrl: "https://www.youtube.com/embed/35EQXmHKZYs", summary: "DispatcherServlet, HandlerMappings, ViewResolvers, and REST converters." },
      { id: 3, title: "Module 3: Spring Boot Actuator & Metrics", videoUrl: "https://www.youtube.com/embed/actuator_sb", summary: "Health checks, metrics endpoints, Prometheus integration, and monitoring." },
      { id: 4, title: "Module 4: Spring Data JPA Advanced Queries", videoUrl: "https://www.youtube.com/embed/8SGI_XS5OPw", summary: "Entity graphs, N+1 query problem solutions, and custom repository implementations." },
      { id: 5, title: "Module 5: Transaction Management (`@Transactional`)", videoUrl: "https://www.youtube.com/embed/tx_spring", summary: "Propagation levels, isolation levels, rollback rules, and programmatic transactions." },
      { id: 6, title: "Module 6: Spring Security Custom Filters", videoUrl: "https://www.youtube.com/embed/X80nJ5T7YpE", summary: "Custom security filters, CORS configuration, OAuth2 integration." },
      { id: 7, title: "Module 7: Spring Cloud API Gateway", videoUrl: "https://www.youtube.com/embed/gateway_spring", summary: "Routing requests, rate limiting, and request transformation filters." },
      { id: 8, title: "Module 8: Resilience4j Circuit Breaker", videoUrl: "https://www.youtube.com/embed/resilience_sb", summary: "Circuit breaker pattern, retry limits, rate limiters, and fallback methods." },
      { id: 9, title: "Module 9: Spring Batch Data Processing", videoUrl: "https://www.youtube.com/embed/batch_spring", summary: "Jobs, Steps, ItemReaders, ItemProcessors, and ItemWriters." },
      { id: 10, title: "Module 10: Integration Testing with Testcontainers", videoUrl: "https://www.youtube.com/embed/testcontainers_sb", summary: "MockMVC tests, database containerization for automated test suites." }
    ]
  },
  {
    id: "data-engineering",
    title: "18. Data Engineering & Big Data Systems",
    modules: [
      { id: 1, title: "Module 1: Data Engineering Ecosystem Overview", videoUrl: "https://www.youtube.com/embed/qWru-b6m030", summary: "ETL vs ELT pipelines, Data Warehouses vs Data Lakes." },
      { id: 2, title: "Module 2: Apache Spark Fundamentals", videoUrl: "https://www.youtube.com/embed/3mLpL7h0d5k", summary: "Spark architecture, RDDs, DataFrames, and distributed cluster processing." },
      { id: 3, title: "Module 3: PySpark Data Transformations", videoUrl: "https://www.youtube.com/embed/_C8kWso474U", summary: "Spark SQL, filtering, aggregations, joins, and windowing operations." },
      { id: 4, title: "Module 4: Real-time Streaming with Apache Kafka", videoUrl: "https://www.youtube.com/embed/Ch5VhJzaoaI", summary: "Topics, partitions, consumer groups, offset management, and retention." },
      { id: 5, title: "Module 5: Workflow Orchestration with Apache Airflow", videoUrl: "https://www.youtube.com/embed/AHMm1LfaMSo", summary: "DAGs, operators, tasks, scheduling pipelines, and Airflow UI management." },
      { id: 6, title: "Module 6: Cloud Data Warehousing (Snowflake / BigQuery)", videoUrl: "https://www.youtube.com/embed/snowflake_dw", summary: "Separation of storage and compute, columnar data format, and SQL analytics." },
      { id: 7, title: "Module 7: Data Lake Storage & Formats", videoUrl: "https://www.youtube.com/embed/datalake_formats", summary: "Parquet, ORC, Avro binary formats, Delta Lake ACID transactions." },
      { id: 8, title: "Module 8: Data Modeling (Star & Snowflake Schema)", videoUrl: "https://www.youtube.com/embed/schema_modeling", summary: "Fact tables, dimension tables, slowly changing dimensions (SCD Type 1 & 2)." },
      { id: 9, title: "Module 9: Data Quality & Testing (dbt / Great Expectations)", videoUrl: "https://www.youtube.com/embed/dbt_overview", summary: "Transformation testing, schema validations, and automated pipeline alerts." },
      { id: 10, title: "Module 10: Deploying Data Pipelines", videoUrl: "https://www.youtube.com/embed/deploy_pipeline", summary: "CI/CD for data infrastructure, monitoring pipeline health, and scaling." }
    ]
  },
  {
    id: "flutter-cross-platform",
    title: "19. Flutter & Dart Cross-Platform Mobile",
    modules: [
      { id: 1, title: "Module 1: Dart Programming Foundations", videoUrl: "https://www.youtube.com/embed/5F-6n_2XWR8", summary: "Syntax, null safety, asynchronous programming (`Future`/`Stream`)." },
      { id: 2, title: "Module 2: Flutter Widgets Core Architecture", videoUrl: "https://www.youtube.com/embed/x0uinJvhNxI", summary: "Stateless vs Stateful widgets, widget tree lifecycle, and hot reload." },
      { id: 3, title: "Module 3: UI Design & Material/Cupertino", videoUrl: "https://www.youtube.com/embed/1xipg02Wu8s", summary: "Layout widgets (Container, Column, Row, Flex), custom themes, and styling." },
      { id: 4, title: "Module 4: State Management with Provider / BLoC", videoUrl: "https://www.youtube.com/embed/d_m5csmrf7I", summary: "Managing app state cleanly using Provider, Riverpod, or BLoC pattern." },
      { id: 5, title: "Module 5: Forms & User Input Handling", videoUrl: "https://www.youtube.com/embed/forms_flutter", summary: "TextEditingControllers, form validation, dropdowns, and checkboxes." },
      { id: 6, title: "Module 6: REST API Consumption & HTTP", videoUrl: "https://www.youtube.com/embed/http_flutter", summary: "Making API requests with HTTP package, JSON serialization models." },
      { id: 7, title: "Module 7: Local Database (Hive / Sqflite)", videoUrl: "https://www.youtube.com/embed/local_db_flutter", summary: "Persisting data locally, key-value stores, and relational query storage." },
      { id: 8, title: "Module 8: Firebase Integration", videoUrl: "https://www.youtube.com/embed/firebase_flutter", summary: "Firebase Auth, Firestore database, Push notifications, and Cloud Storage." },
      { id: 9, title: "Module 9: Custom Animations & Transitions", videoUrl: "https://www.youtube.com/embed/animations_flutter", summary: "Implicit vs Explicit animations, AnimationControllers, Hero transitions." },
      { id: 10, title: "Module 10: Cross-Platform Build Deployment", videoUrl: "https://www.youtube.com/embed/deploy_flutter", summary: "Building iOS IPA and Android APK/AAB packages for app stores." }
    ]
  },
  {
    id: "ai-prompt-eng",
    title: "20. Generative AI & Prompt Engineering",
    modules: [
      { id: 1, title: "Module 1: Introduction to Generative AI", videoUrl: "https://www.youtube.com/embed/2IK3DFHRFfw", summary: "Foundational models, transformer architecture, tokens, and temperature parameters." },
      { id: 2, title: "Module 2: Prompt Engineering Techniques", videoUrl: "https://www.youtube.com/embed/jC4v5AS4RIM", summary: "Zero-shot, Few-shot prompting, System persona design, and context window optimization." },
      { id: 3, title: "Module 3: Chain-of-Thought & Reasoning", videoUrl: "https://www.youtube.com/embed/cot_ai_reasoning", summary: "Step-by-step reasoning prompts, self-consistency techniques, and problem decomposition." },
      { id: 4, title: "Module 4: OpenAI & Gemini API Integration", videoUrl: "https://www.youtube.com/embed/api_ai_models", summary: "API keys, calling models via Python/JS SDKs, function calling, and JSON output mode." },
      { id: 5, title: "Module 5: RAG (Retrieval-Augmented Generation)", videoUrl: "https://www.youtube.com/embed/T-D1OfcDW1M", summary: "Enhancing LLMs with internal dynamic data, document parsers, and retrieval mechanisms." },
      { id: 6, title: "Module 6: Vector Databases (Pinecone / ChromaDB)", videoUrl: "https://www.youtube.com/embed/klTvEwg3oJ4", summary: "Generating embeddings, vector similarity search, indexing, and distance metrics." },
      { id: 7, title: "Module 7: LangChain Framework Masterclass", videoUrl: "https://www.youtube.com/embed/aywZrzNaKjs", summary: "Chains, memory modules, output parsers, document loaders, and tools in LangChain." },
      { id: 8, title: "Module 8: AI Agents & Tool Calling", videoUrl: "https://www.youtube.com/embed/agents_langchain", summary: "Autonomous agents, ReAct frameworks, Web Search tools, and dynamic task execution." },
      { id: 9, title: "Module 9: Mitigating AI Hallucinations & Guardrails", videoUrl: "https://www.youtube.com/embed/hallucinations_ai", summary: "Factual validation techniques, prompt injection defenses, and safety guardrails." },
      { id: 10, title: "Module 10: Building End-to-End LLM Applications", videoUrl: "https://www.youtube.com/embed/full_ai_app", summary: "Deploying production-ready AI chatbots, user interface setup, and latency optimization." }
    ]
  },
  {
    id: "power-bi",
    title: "21. Power BI & Business Intelligence",
    modules: [
      { id: 1, title: "Module 1: Introduction to Power BI & Desktop Setup", videoUrl: "https://www.youtube.com/embed/AGrl-H87pRU", summary: "Power BI Desktop interface, data sources, report view, data view, and model view." },
      { id: 2, title: "Module 2: Data Transformation in Power Query", videoUrl: "https://www.youtube.com/embed/power_query_bi", summary: "Cleaning messy data, splitting columns, unpivoting data, and applying conditional columns." },
      { id: 3, title: "Module 3: Data Modeling & Relationships", videoUrl: "https://www.youtube.com/embed/modeling_pbi", summary: "Star schemas, active vs inactive relationships, directionality, and cardinalities." },
      { id: 4, title: "Module 4: DAX Basics (Measures vs Columns)", videoUrl: "https://www.youtube.com/embed/dax_pbi_intro", summary: "Calculated columns, custom measures, context transition, and basic DAX functions." },
      { id: 5, title: "Module 5: Advanced DAX (CALCULATE & Time Intelligence)", videoUrl: "https://www.youtube.com/embed/calculate_dax", summary: "`CALCULATE` function, filter modification, Year-to-Date (YTD), and Month-to-Date metrics." },
      { id: 6, title: "Module 6: Building Interactive Visualizations", videoUrl: "https://www.youtube.com/embed/visuals_pbi", summary: "Line charts, stacked bar charts, KPI cards, matrices, maps, and custom visuals." },
      { id: 7, title: "Module 7: Interactive Slicers & Drillthroughs", videoUrl: "https://www.youtube.com/embed/slicers_pbi", summary: "Cross-filtering, slicer sync across pages, detail drillthrough pages, and tooltips." },
      { id: 8, title: "Module 8: Power BI Service & Cloud Workspaces", videoUrl: "https://www.youtube.com/embed/service_pbi", summary: "Publishing reports, creating dashboards, workspace roles, and scheduled refresh." },
      { id: 9, title: "Module 9: Row-Level Security (RLS)", videoUrl: "https://www.youtube.com/embed/rls_pbi", summary: "Defining static and dynamic user security roles to restrict data visibility." },
      { id: 10, title: "Module 10: Enterprise Reporting & Dashboards", videoUrl: "https://www.youtube.com/embed/dashboard_pbi", summary: "Embedding Power BI reports, automated distribution, and performance optimization." }
    ]
  }
];