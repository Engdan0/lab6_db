import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-CmoclL9P.js";const o={},t=e(`<h1 id="реалізація-інформаціиного-та-програмного-забезпечення" tabindex="-1"><a class="header-anchor" href="#реалізація-інформаціиного-та-програмного-забезпечення"><span>Реалізація інформаційного та програмного забезпечення</span></a></h1><h2 id="sql-скрипт-для-створення-початкового-наповнення-бази-даних" tabindex="-1"><a class="header-anchor" href="#sql-скрипт-для-створення-початкового-наповнення-бази-даних"><span>SQL-Скрипт для створення початкового наповнення бази даних</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">BEGIN</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    login <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    first_name <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    last_name <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    password <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    email <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    role_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Roles&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    alias <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permission_Roles&quot;</span>
<span class="token punctuation">(</span>
    role_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    permission_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permissions&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    alias <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Accesses&quot;</span>
<span class="token punctuation">(</span>
    user_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    permission_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    dataset_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    title <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    description <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    rating <span class="token keyword">real</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    datafile_id <span class="token keyword">integer</span><span class="token punctuation">,</span>
    category_id <span class="token keyword">integer</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datafiles&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    guid uuid <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    alias <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    mime <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token string">&quot;description&quot;</span> <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    size <span class="token keyword">real</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token string">&quot;uploadedAt&quot;</span> <span class="token keyword">timestamp</span> without <span class="token keyword">time</span> zone <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    user_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Categories&quot;</span>
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    name <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    description <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    parent_category_id <span class="token keyword">integer</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Updates&quot;</span>
<span class="token punctuation">(</span>
    <span class="token keyword">hash</span> <span class="token keyword">character</span> <span class="token keyword">varying</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    updatet_at <span class="token keyword">timestamp</span> without <span class="token keyword">time</span> zone <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    message <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    difference <span class="token keyword">character</span> <span class="token keyword">varying</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    user_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    dataset_id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>role_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Roles&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permission_Roles&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>role_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Roles&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permission_Roles&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>permission_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permissions&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Accesses&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Accesses&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>permission_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Permissions&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Accesses&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>dataset_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>datafile_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datafiles&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>category_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Categories&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datafiles&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Categories&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>parent_category_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Categories&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>
	
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Updates&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>user_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Users&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Updates&quot;</span>
    <span class="token keyword">ADD</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>dataset_id<span class="token punctuation">)</span>
    <span class="token keyword">REFERENCES</span> <span class="token keyword">public</span><span class="token punctuation">.</span><span class="token string">&quot;Datasets&quot;</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">MATCH</span> <span class="token keyword">SIMPLE</span>
    <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">NO</span> <span class="token keyword">ACTION</span>
    <span class="token operator">NOT</span> VALID<span class="token punctuation">;</span>

<span class="token keyword">END</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restfull-сервіс-для-управління-даними" tabindex="-1"><a class="header-anchor" href="#restfull-сервіс-для-управління-даними"><span>RESTfull сервіс для управління даними</span></a></h2><h3 id="restfull-servise-для-управління-даними-таблиці-datafiles-створеноі-в-postgresql-було-створено-за-допомогою-фреимворку-flask-на-мові-python" tabindex="-1"><a class="header-anchor" href="#restfull-servise-для-управління-даними-таблиці-datafiles-створеноі-в-postgresql-було-створено-за-допомогою-фреимворку-flask-на-мові-python"><span>RESTfull_servise для управління даними таблиці Datafiles створеної в PostgreSQL було створено за допомогою фреймворку flask на мові Python.</span></a></h3><h3 id="підєднання-до-бази-даних" tabindex="-1"><a class="header-anchor" href="#підєднання-до-бази-даних"><span>Підєднання до бази даних</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import psycopg2


conn = psycopg2.connect(
    database=&quot;postgres&quot;,
    user=&quot;postgres&quot;,
    password=&quot;1234&quot;,
    host=&quot;localhost&quot;,  
    port=&quot;5432&quot;
)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="модуль-відповідальнии-за-отримання-даних-з-бази-даних" tabindex="-1"><a class="header-anchor" href="#модуль-відповідальнии-за-отримання-даних-з-бази-даних"><span>Модуль відповідальний за отримання даних з бази даних</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>def get_all_data(cur):
    cur.execute(&#39;&#39;&#39;SELECT * FROM &quot;Users&quot;&#39;&#39;&#39;)
    get_data = cur.fetchall()
    cur.close()
    return {&#39;data&#39;: get_data}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="модуль-відповідальнии-за-регістрацію-та-авторизацію-користувачів" tabindex="-1"><a class="header-anchor" href="#модуль-відповідальнии-за-регістрацію-та-авторизацію-користувачів"><span>Модуль відповідальний за регістрацію та авторизацію користувачів</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from psycopg2 import errors
import connection_to_db

def insert_data(cur, login, first_name, last_name, password, email, role_id):
    try:
        cur.execute(f&#39;&#39;&#39;SELECT email FROM &quot;Users&quot; &#39;&#39;&#39;)
        get_data = cur.fetchall()
        for i in get_data:
            if email == i[0]:
                return {&#39;data&#39;: &quot;You already have an account&quot;}


        cur.execute(&#39;SELECT MAX(id) FROM &quot;Users&quot; &#39;)
        next_id = cur.fetchall()
        insert_data_to_db = (f&#39;&#39;&#39;INSERT INTO &quot;Users&quot;(
	                                 id, login, first_name, last_name, password, email, role_id)
                                     VALUES (%s, %s, %s, %s, %s, %s, %s)&#39;&#39;&#39;)
        data = (next_id[-1][0]+1, login, first_name, last_name, password, email, role_id)
        cur.execute(insert_data_to_db, data)
        cur.connection.commit()
        return &quot;User insert successful!&quot;
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    finally:
        cur.close()


def log(cur, password, email):
    try:
        cur.execute(f&#39;&#39;&#39;SELECT password, email FROM &quot;Users&quot; Where email = %s&#39;&#39;&#39;, (email,))
        get_data = cur.fetchone()
        if get_data[0] == password:
            return &quot;User login successful!&quot;
        else:
            return &quot;Password is wrong!&quot;
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    except TypeError:
        raise
    finally:
        cur.close()


def change_per(cur, email, email_admin, password_admin, role_id):
    try:
        with connection_to_db.conn.cursor() as cur2:
            log_admin = log(cur2, password_admin, email_admin)
        if log_admin == &quot;Password is wrong!&quot;:
            return log_admin
        else:
            cur.execute(f&#39;&#39;&#39;SELECT role_id FROM &quot;Users&quot; Where email = %s&#39;&#39;&#39;, (email_admin,))
            get_data1 = cur.fetchone()
            if get_data1[0] == 2:
                cur.execute(f&#39;&#39;&#39;SELECT role_id FROM &quot;Users&quot; Where email = %s&#39;&#39;&#39;, (email,))
                get_data = cur.fetchone()
                if get_data[0] == role_id:
                    return &quot;User already has this role!&quot;
                else:
                    if role_id == 1:
                        cur.execute(f&#39;&#39;&#39;UPDATE &quot;Users&quot; SET role_id = 1 WHERE email = %s&#39;&#39;&#39;, (email,))
                        cur.connection.commit()
                        return &quot;You successefuly gave role 1&quot;
                    elif role_id == 2:
                        cur.execute(f&#39;&#39;&#39;UPDATE &quot;Users&quot; SET role_id = 2 WHERE email = %s&#39;&#39;&#39;, (email,))
                        cur.connection.commit()
                        return &quot;You successefuly gave role 2&quot;
            else:
                return &quot;You have no permission for that&quot;
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    except TypeError:
        raise
    finally:
        cur.close()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rest-api-з-всіма-endpoint" tabindex="-1"><a class="header-anchor" href="#rest-api-з-всіма-endpoint"><span>Rest API з всіма Endpoint</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>from flask import Flask, jsonify, request
from psycopg2 import errors

import connection_to_db
import get_data_from_db
import insert_data_to_db

app = Flask(__name__)


@app.route(&#39;/get_data&#39;, methods=[&#39;GET&#39;])
def get_data():
    with connection_to_db.conn.cursor() as cur:
        data = get_data_from_db.get_all_data(cur)
    return jsonify(data)


@app.route(&#39;/registration&#39;, methods=[&#39;POST&#39;])
def insert_new_data():
    request_data = request.get_json()
    login = request_data.get(&#39;login&#39;)
    first_name = request_data.get(&#39;first_name&#39;)
    last_name = request_data.get(&#39;last_name&#39;)
    password = request_data.get(&#39;password&#39;)
    email = request_data.get(&#39;email&#39;)
    role_id = request_data.get(&#39;role_id&#39;)
    if login and first_name and last_name and password and email and role_id:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.insert_data(cur, login, first_name, last_name, password, email, role_id)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({&#39;error&#39;: str(e)}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({&#39;error&#39;: &#39;Missing parameters&#39;}), 400


@app.route(&#39;/login&#39;, methods=[&#39;POST&#39;])
def login_user():
    request_data = request.get_json()
    password = request_data.get(&#39;password&#39;)
    email = request_data.get(&#39;email&#39;)
    if password and email:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.log(cur, password, email)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({&#39;error&#39;: str(e)}), 400
        except TypeError:
            return jsonify({&quot;error&quot;: &quot;This user doesnt exist!&quot;})
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({&#39;error&#39;: &#39;Missing parameters&#39;}), 400


@app.route(&#39;/change_permissions&#39;, methods=[&#39;POST&#39;])
def change_permissions():
    request_data = request.get_json()
    role_id = request_data.get(&#39;role_id&#39;)
    email = request_data.get(&#39;email&#39;)
    email_admin = request_data.get(&#39;email_admin&#39;)
    password_admin = request_data.get(&#39;password_admin&#39;)
    if role_id and email and email_admin and password_admin:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.change_per(cur, email, email_admin, password_admin, role_id)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({&#39;error&#39;: str(e)}), 400
        except TypeError:
            return jsonify({&#39;error&#39;: &quot;This user doesnt exist! Change your email, or users&quot;})
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({&#39;error&#39;: &#39;Missing parameters&#39;}), 400


if __name__ == &#39;__main__&#39;:
    app.run()



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[t];function i(l,c){return s(),a("div",null,p)}const u=n(o,[["render",i],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/software/","title":"Реалізація інформаційного та програмного забезпечення","lang":"en-US","frontmatter":{"description":"Реалізація інформаційного та програмного забезпечення SQL-Скрипт для створення початкового наповнення бази даних RESTfull сервіс для управління даними RESTfull_servise для управ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/lab6_db/software/"}],["meta",{"property":"og:site_name","content":"Система управління відкритими даними"}],["meta",{"property":"og:title","content":"Реалізація інформаційного та програмного забезпечення"}],["meta",{"property":"og:description","content":"Реалізація інформаційного та програмного забезпечення SQL-Скрипт для створення початкового наповнення бази даних RESTfull сервіс для управління даними RESTfull_servise для управ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-25T09:12:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-25T09:12:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Реалізація інформаційного та програмного забезпечення\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-25T09:12:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL-Скрипт для створення початкового наповнення бази даних","slug":"sql-скрипт-для-створення-початкового-наповнення-бази-даних","link":"#sql-скрипт-для-створення-початкового-наповнення-бази-даних","children":[]},{"level":2,"title":"RESTfull сервіс для управління даними","slug":"restfull-сервіс-для-управління-даними","link":"#restfull-сервіс-для-управління-даними","children":[{"level":3,"title":"RESTfull_servise для управління даними таблиці Datafiles створеної в PostgreSQL було створено за допомогою фреймворку flask на мові Python.","slug":"restfull-servise-для-управління-даними-таблиці-datafiles-створеноі-в-postgresql-було-створено-за-допомогою-фреимворку-flask-на-мові-python","link":"#restfull-servise-для-управління-даними-таблиці-datafiles-створеноі-в-postgresql-було-створено-за-допомогою-фреимворку-flask-на-мові-python","children":[]},{"level":3,"title":"Підєднання до бази даних","slug":"підєднання-до-бази-даних","link":"#підєднання-до-бази-даних","children":[]},{"level":3,"title":"Модуль відповідальний за отримання даних з бази даних","slug":"модуль-відповідальнии-за-отримання-даних-з-бази-даних","link":"#модуль-відповідальнии-за-отримання-даних-з-бази-даних","children":[]},{"level":3,"title":"Модуль відповідальний за регістрацію та авторизацію користувачів","slug":"модуль-відповідальнии-за-регістрацію-та-авторизацію-користувачів","link":"#модуль-відповідальнии-за-регістрацію-та-авторизацію-користувачів","children":[]},{"level":3,"title":"Rest API з всіма Endpoint","slug":"rest-api-з-всіма-endpoint","link":"#rest-api-з-всіма-endpoint","children":[]}]}],"git":{"createdTime":1708081508000,"updatedTime":1716628366000,"contributors":[{"name":"Engdan0","email":"kostya080503@gmail.com","commits":3},{"name":"Dmytro Zanuda","email":"dmzanuda.work@gmail.com","commits":2}]},"readingTime":{"minutes":0.24,"words":71},"filePathRelative":"software/README.md","localizedDate":"February 16, 2024","autoDesc":true}');export{u as comp,k as data};
