export default function AIRoadmap() {
  const stages = [
    {
      title: 'Stage 1 — Python Basics (2–3 weeks)',
      color: 'from-violet-700 to-violet-500',
      items: [
        { name: 'Python Syntax', details: ['Variables', 'Loops', 'Functions', 'Modules'] },
        { name: 'OOP', details: ['Classes', 'Inheritance', 'Polymorphism'] },
        { name: 'NumPy', details: ['Arrays', 'Matrix Ops', 'Broadcasting'] },
        { name: 'Pandas', details: ['DataFrames', 'Cleaning', 'Transformations'] },
      ],
    },
    {
      title: 'Stage 2 — Just Enough Math (2–3 weeks)',
      color: 'from-blue-700 to-blue-500',
      items: [
        { name: 'Linear Algebra', details: ['Vectors', 'Matrices', 'Dot Product'] },
        { name: 'Probability', details: ['Bayes Theorem', 'Distributions'] },
        { name: 'Statistics', details: ['Mean', 'Variance', 'Standard Deviation'] },
      ],
    },
    {
      title: 'Stage 3 — ML Basics (3–4 weeks)',
      color: 'from-amber-700 to-amber-500',
      items: [
        { name: 'Scikit-learn', details: ['Pipelines', 'Preprocessing', 'Training'] },
        { name: 'ML Concepts', details: ['Classification', 'Regression', 'Evaluation'] },
      ],
    },
    {
      title: 'Stage 4 — LLMs and APIs (6–8 weeks)',
      color: 'from-purple-700 to-purple-500',
      sections: [
        {
          heading: '4A — How LLMs Work',
          cards: [
            {
              name: 'Transformers',
              details: ['Attention', 'Self Attention', 'Encoder vs Decoder', 'Context Window'],
            },
            {
              name: 'Tokens',
              details: ['Tokenization', 'BPE', 'Token Limits', 'Context Length'],
            },
            {
              name: 'Embeddings',
              details: ['Vector Search', 'Semantic Similarity', 'Embedding Models'],
            },
            {
              name: 'Prompt Engineering',
              details: ['Few-shot', 'Chain-of-thought', 'ReAct', 'Role Prompting'],
            },
            {
              name: 'Inference',
              details: ['Temperature', 'Top-p', 'Sampling', 'Generation'],
            },
            {
              name: 'Fine-Tuning Basics',
              details: ['Instruction Tuning', 'LoRA', 'QLoRA', 'PEFT'],
            },
            {
              name: 'Model Architectures',
              details: ['GPT', 'BERT', 'Encoder Models', 'Decoder Models'],
            },
            {
              name: 'AI Libraries',
              details: ['OpenAI SDK', 'Transformers', 'HuggingFace', 'Anthropic SDK'],
            },
            {
              name: 'Open Source Models',
              details: ['Llama', 'Mistral', 'Gemma', 'DeepSeek', 'Phi'],
            },
            {
              name: 'Local Models',
              details: ['Ollama', 'GGUF', 'Quantization', 'CPU vs GPU'],
            },
            {
              name: 'LLM Memory',
              details: ['Short-term Memory', 'Context Retention', 'Conversation State'],
            },
            {
              name: 'Multimodal AI',
              details: ['Vision Models', 'Image Understanding', 'Audio Models'],
            },
            {
              name: 'Safety & Alignment',
              details: ['RLHF', 'Alignment', 'Moderation', 'Safety Layers'],
            },
            {
              name: 'Model Serving',
              details: ['vLLM', 'Inference APIs', 'Batching', 'Latency'],
            },
            {
              name: 'Evaluation Basics',
              details: ['Benchmarks', 'Hallucinations', 'Accuracy', 'Latency'],
            },
          ],
        },
        {
          heading: '4B — FastAPI + Calling LLMs',
          cards: [
            {
              name: 'FastAPI Basics',
              details: ['Routes', 'Pydantic', 'Requests', 'Responses', 'Validation'],
            },
            {
              name: 'Async APIs',
              details: ['Async/Await', 'Concurrency', 'Background Tasks'],
            },
            {
              name: 'Call LLM APIs',
              details: ['OpenAI', 'Gemini', 'Anthropic', 'Mistral APIs'],
            },
            {
              name: 'Streaming Responses',
              details: ['SSE', 'WebSockets', 'Realtime Tokens', 'Chunk Streaming'],
            },
            {
              name: 'Function Calling',
              details: ['Tools', 'Structured Outputs', 'JSON Schema'],
            },
            {
              name: 'Authentication',
              details: ['JWT', 'OAuth', 'API Keys', 'Rate Limiting'],
            },
            {
              name: 'Chat Memory APIs',
              details: ['Conversation Storage', 'Redis Memory', 'Session Context'],
            },
            {
              name: 'File Handling',
              details: ['PDF Upload', 'Parsing', 'Document APIs'],
            },
            {
              name: 'Realtime AI Apps',
              details: ['AI Chat Apps', 'Copilots', 'Voice Streaming'],
            },
          ],
        },
        {
          heading: '4C — Vector DBs and RAG',
          cards: [
            {
              name: 'Vector Databases',
              details: ['Pinecone', 'Qdrant', 'Weaviate', 'FAISS', 'ChromaDB'],
            },
            {
              name: 'Embeddings Pipeline',
              details: ['Chunking', 'Embedding Models', 'Metadata', 'Indexing'],
            },
            {
              name: 'Retrieval Systems',
              details: ['Similarity Search', 'Top-K Retrieval', 'Filtering'],
            },
            {
              name: 'Advanced RAG',
              details: ['Hybrid Search', 'Reranking', 'Parent-Child Retrieval'],
            },
            {
              name: 'Agentic RAG',
              details: ['Query Planning', 'Dynamic Retrieval', 'Tool-Augmented RAG'],
            },
            {
              name: 'Graph RAG',
              details: ['Knowledge Graphs', 'Entity Linking', 'Relationships'],
            },
            {
              name: 'RAG Evaluation',
              details: ['Ragas', 'Retrieval Accuracy', 'Faithfulness'],
            },
            {
              name: 'RAG Frameworks',
              details: ['LangChain', 'LlamaIndex', 'Haystack'],
            },
            {
              name: 'Document Loaders',
              details: ['PDF', 'CSV', 'DOCX', 'Website Crawlers'],
            },
          ],
        },
      ],
    },
    {
      title: 'Stage 5 — AI Agents (6–8 weeks)',
      color: 'from-orange-700 to-orange-500',
      sections: [
        {
          heading: '5A — What is an AI Agent?',
          cards: [
            {
              name: 'Agent Architectures',
              details: ['ReAct', 'Plan-and-Execute', 'Reflection', 'Autonomous Loops'],
            },
            {
              name: 'Tool Use',
              details: ['Function Calling', 'APIs', 'Actions', 'Tool Routing'],
            },
            {
              name: 'Memory Systems',
              details: ['Short-term', 'Long-term', 'RAG Memory', 'Conversation State'],
            },
            {
              name: 'Planning Systems',
              details: ['Task Planning', 'Goal Decomposition', 'Reasoning Chains'],
            },
            {
              name: 'Agent Communication',
              details: ['Message Passing', 'Context Sharing', 'Coordination'],
            },
            {
              name: 'Browser Agents',
              details: ['Web Automation', 'Computer Use', 'Navigation'],
            },
            {
              name: 'Coding Agents',
              details: ['Code Generation', 'Execution', 'Debugging'],
            },
            {
              name: 'Voice Agents',
              details: ['Speech-to-Text', 'Realtime Voice', 'Text-to-Speech'],
            },
          ],
        },
        {
          heading: '5B — Agent Frameworks',
          cards: [
            {
              name: 'LangGraph',
              details: ['State Machines', 'Agent Flow', 'Human-in-loop', 'Persistence'],
            },
            {
              name: 'CrewAI',
              details: ['Roles', 'Task Delegation', 'Agent Teams'],
            },
            {
              name: 'AutoGen',
              details: ['Multi-Agent Chats', 'Collaboration', 'Agent Messaging'],
            },
            {
              name: 'Google ADK',
              details: ['Gemini Agents', 'Google Ecosystem', 'Tooling'],
            },
            {
              name: 'Semantic Kernel',
              details: ['Microsoft Plugins', 'AI Orchestration', 'Memory'],
            },
            {
              name: 'OpenAI Agents SDK',
              details: ['Agent Loops', 'Tool Calling', 'Tracing'],
            },
            {
              name: 'LlamaIndex Agents',
              details: ['Data Agents', 'Retriever Agents', 'Tool Agents'],
            },
            {
              name: 'MCP Protocol',
              details: ['Tool Integration', 'AI Context Protocol', 'External Tools'],
            },
          ],
        },
        {
          heading: '5C — Advanced Topics',
          cards: [
            {
              name: 'Multi-Agent Systems',
              details: ['Coordinator Agents', 'Agent Teams', 'Distributed Agents'],
            },
            {
              name: 'Guardrails + Security',
              details: ['Moderation', 'Prompt Injection', 'Validation', 'Safety'],
            },
            {
              name: 'Agent Evaluation',
              details: ['DeepEval', 'LangSmith', 'Trajectory Testing'],
            },
            {
              name: 'Observability',
              details: ['Tracing', 'Logging', 'Token Monitoring', 'Latency'],
            },
            {
              name: 'Fine-Tuning',
              details: ['LoRA', 'QLoRA', 'PEFT', 'Instruction Tuning'],
            },
            {
              name: 'Realtime AI',
              details: ['Realtime APIs', 'Voice Streaming', 'Interruptions'],
            },
            {
              name: 'AI System Design',
              details: ['Scalability', 'Caching', 'Cost Optimization'],
            },
          ],
        },
      ],
    },
    {
      title: 'Stage 6 — Deployment & Production AI',
      color: 'from-emerald-700 to-emerald-500',
      items: [
        {
          name: 'Containerization',
          details: ['Docker', 'Docker Compose', 'Images', 'Volumes'],
        },
        {
          name: 'Kubernetes',
          details: ['Pods', 'Deployments', 'Services', 'Scaling'],
        },
        {
          name: 'Model Serving',
          details: ['vLLM', 'TGI', 'Ollama', 'Inference Servers'],
        },
        {
          name: 'GPU Infrastructure',
          details: ['CUDA', 'VRAM', 'GPU Optimization'],
        },
        {
          name: 'Caching Systems',
          details: ['Redis', 'Semantic Cache', 'Rate Limiting'],
        },
        {
          name: 'Monitoring',
          details: ['Logs', 'Tracing', 'Prometheus', 'Grafana'],
        },
        {
          name: 'CI/CD',
          details: ['GitHub Actions', 'Deployment Pipelines', 'Automation'],
        },
        {
          name: 'Cloud Platforms',
          details: ['AWS', 'Azure', 'GCP', 'Serverless'],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-block px-8 py-4 rounded-2xl bg-emerald-900/40 border border-emerald-500 shadow-lg">
            <h1 className="text-3xl font-bold">AI Full Stack Roadmap</h1>
            <p className="text-gray-300 mt-1">Java • React • AI Agents • RAG • LLM Engineering</p>
          </div>
        </div>

        {stages.map((stage, idx) => (
          <div key={idx} className="space-y-5 relative">
            <div className={`rounded-2xl p-[1px] bg-gradient-to-r ${stage.color}`}>
              <div className="bg-[#121218] rounded-2xl p-6 border border-white/10 shadow-2xl">
                <h2 className="text-2xl font-bold mb-5">{stage.title}</h2>

                {stage.sections ? (
                  <div className="space-y-6">
                    {stage.sections.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-lg font-semibold">
                          {section.heading}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {section.cards.map((card, cIdx) => (
                            <div
                              key={cIdx}
                              className="bg-[#1a1a22] border border-white/10 rounded-xl p-5 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                              <div className="font-semibold text-lg mb-3">{card.name}</div>

                              <ul className="space-y-2 text-sm text-gray-300">
                                {card.details.map((detail, dIdx) => (
                                  <li key={dIdx}>• {detail}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stage.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-[#1a1a22] border border-white/10 rounded-xl p-5 hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        <div className="font-semibold text-lg mb-3">{item.name}</div>

                        <ul className="space-y-2 text-sm text-gray-300">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {idx !== stages.length - 1 && (
              <div className="flex justify-center">
                <div className="w-[2px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
