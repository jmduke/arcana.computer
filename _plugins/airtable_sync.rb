# frozen_string_literal: true

require 'json'
require 'airtable'
require 'active_support/all'

# Pass in api key to client
AIRTABLE_API_KEY = 'keyX4yPY1qYqq1pad'
AIRTABLE_TABLE_ID = 'app5RDJQQni8Itd2D'

@client = Airtable::Client.new(AIRTABLE_API_KEY)

def paginate_indefinitely(table)
  all_results = []
  offset = nil
  loop do
    page = table.records(view: 'Grid view', offset: offset)
    all_results += page.map(&:attributes)
    offset = page.offset
    break if offset.nil?
  end
  all_results
end

def collect_records(sheet_name)
  paginate_indefinitely(@client.table(AIRTABLE_TABLE_ID, sheet_name))
end

def write_records(records, output_path)
  File.open(output_path, 'w') do |f|
    f.write(records.to_json)
  end
end

content_records = collect_records('Content')
notebook_records = collect_records('Notebook')
content_id_to_data = Hash[content_records.collect { |v| [v['id'], v] }]
notebook_records.each do |record|
  next unless record['source']

  record['source'] = content_id_to_data[record['source'][0]]
end

write_records(notebook_records, '_data/notebook.json')
write_records(content_records, '_data/content.json')
write_records(collect_records('Dictionary'), '_data/words.json')
write_records(collect_records('Veuve'), '_data/veuve.json')
write_records(collect_records('Press'), '_data/press.json')
write_records(collect_records('Currently'), '_data/currently.json')
