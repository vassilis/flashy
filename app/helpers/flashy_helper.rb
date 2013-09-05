module FlashyHelper
	def flashy
		render partial: 'flashy/flash'
	end

	def flash_name(name)
		keys = {
			success: 'success',
			notice: 'info',
			alert: 'warning',
			error: 'danger'
		}
		keys[name]
	end
end
