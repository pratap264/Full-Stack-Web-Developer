import { useState } from 'react';
import { X } from 'lucide-react';

export default function AIRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
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
              explanation:
                'Transformers are the backbone of modern LLMs. They process tokens in parallel using self-attention and understand long-range relationships in text.'
            },
            {
              name: 'Tokens',
              details: ['Tokenization', 'BPE', 'Token Limits', 'Context Length'],
              explanation:
                'LLMs do not read raw text directly. Text is converted into tokens using tokenizers like BPE before being processed by the model.'
            },
            {
              name: 'Embeddings',
              details: ['Vector Search', 'Semantic Similarity', 'Embedding Models'],
              explanation:
                'Embeddings convert text into vectors so that semantic similarity and retrieval systems can understand meaning.'
            },
            {
              name: 'Prompt Engineering',
              details: ['Few-shot', 'Chain-of-thought', 'ReAct', 'Role Prompting'],
              explanation:
                'Prompt engineering helps guide LLM behavior using structured instructions, reasoning techniques, and examples.'
            },
            {
              name: 'Inference',
              details: ['Temperature', 'Top-p', 'Sampling', 'Generation'],
              explanation:
                'Inference controls how models generate text including creativity, randomness, and response diversity.'
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
              details: [
                'Pinecone',
                'Qdrant',
                'Weaviate',
                'FAISS',
                'ChromaDB',
                'Milvus',
                'pgvector',
                'Hybrid Search',
                'Metadata Filtering',
                'Similarity Search',
                'Cosine Similarity',
                'ANN Search',
                'Dense Retrieval',
                'Sparse Retrieval',
                'Semantic Search',
                'Sharding',
                'Indexing',
                'Vector Compression'
              ],
              explanation:
                'Vector databases store embeddings and power semantic retrieval systems for RAG, agents, search systems, and recommendation engines.'
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
              details: [
                'Hybrid Search',
                'Reranking',
                'Cross Encoders',
                'Parent-Child Retrieval',
                'Recursive Retrieval',
                'Query Rewriting',
                'Context Compression',
                'Citation-aware Generation',
                'Long Context Handling',
                'Context Engineering',
                'Memory-Augmented Retrieval',
                'Cache-Augmented Generation',
                'Self-RAG',
                'Corrective RAG',
                'Adaptive RAG'
              ],
              explanation:
                'Advanced RAG focuses on improving retrieval quality, grounding, faithfulness, scalability, and enterprise-grade reliability.'
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
              details: [
                'State Machines',
                'Agent Flow',
                'Human-in-loop',
                'Persistence',
                'Conditional Edges',
                'Tool Nodes',
                'Memory Management',
                'Retry Logic',
                'Streaming',
                'Parallel Branches',
                'Checkpointing',
                'Supervisor Agents'
              ],
              explanation:
                'LangGraph is one of the most important orchestration frameworks for building production-ready stateful AI agents.'
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
              details: [
                'LoRA',
                'QLoRA',
                'PEFT',
                'Instruction Tuning',
                'RLHF',
                'DPO',
                'ORPO',
                'GRPO',
                'Dataset Preparation',
                'Synthetic Data Generation',
                'Quantization',
                'Knowledge Distillation',
                'HuggingFace PEFT',
                'Axolotl',
                'Unsloth',
                'Safetensors',
                'GGUF Models'
              ],
              explanation:
                'Fine-tuning customizes models for specific domains, workflows, and enterprise tasks while optimizing cost and performance.'
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
          details: [
            'GitHub Actions',
            'GitLab CI',
            'Jenkins',
            'Docker Build Pipelines',
            'Automated Testing',
            'Deployment Pipelines',
            'Blue-Green Deployments',
            'Canary Releases',
            'Infrastructure as Code',
            'Terraform',
            'Secrets Management',
            'Environment Variables',
            'Rollback Strategies',
            'Monitoring Integration',
            'Automated Linting'
          ],
          explanation:
            'CI/CD automates testing, deployment, infrastructure management, monitoring, and scaling for production AI applications.'
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
                              className="bg-[#1a1a22] border border-white/10 rounded-xl p-5 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                              onClick={() => setSelectedTopic(card)}
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
                        className="bg-[#1a1a22] border border-white/10 rounded-xl p-5 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                        onClick={() => setSelectedTopic(item)}
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
            {selectedTopic && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#14141c] border border-white/10 rounded-3xl max-w-5xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedTopic(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-3xl font-bold mb-4 text-white">
                {selectedTopic.name}
              </h2>

              <p className="text-gray-300 leading-7 mb-6">
                {selectedTopic.explanation ||
                  'This topic is an important part of modern AI engineering and production-grade GenAI systems.'}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Topics Covered
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedTopic.details &&
                    selectedTopic.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-xl p-4"
                      >
                        <div className="font-medium text-white">{detail}</div>
                        <p className="text-sm text-gray-400 mt-2 leading-6">
                          Learn concepts, practical implementation, architecture, and production use cases related to {detail}.
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
